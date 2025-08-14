import {Component, OnDestroy, OnInit} from '@angular/core';
import {CharacterState} from '../../ngrx/onepiece/onepiece.state';
import {Store} from '@ngrx/store';
import {CharacterItemModel} from '../../module/characterItem.model';
import {Observable, Subscription} from 'rxjs';
import * as OnePieceActions from '../../ngrx/onepiece/onepiece.actions';
import * as AuthActions from '../../ngrx/auth/auth.actions';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {AsyncPipe} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {Router} from '@angular/router';
import {Auth} from '@angular/fire/auth';
import {AuthService} from '../../service/auth/auth.service';
import {AuthState} from '../../ngrx/auth/auth.state';
@Component({
  selector: 'app-home',
  imports: [
    MatProgressSpinnerModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit ,OnDestroy{

  onePieceList$!: Observable<CharacterItemModel[]>;
  subscriptions: Subscription[] = [];
  isLoading$!: Observable<boolean>;

  constructor(
    private store:Store<{
      character: CharacterState,
      auth: AuthState,
    }>,
    private router: Router,
    private authService:AuthService,
  ) {
    this.onePieceList$ = this.store.select('character', 'characterList');
    this.isLoading$ = this.store.select('character', 'isLoading');
    this.getCharacters();
  }

  ngOnDestroy(): void {
   this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.onePieceList$.subscribe((character: CharacterItemModel[]) => {
        console.log(character);
      }),
    )
  }

  getCharacters() {
    this.store.dispatch(OnePieceActions.getAllOnepieceCharacters());
  }

  navigateToDetail(id: number){
    this.router.navigate(['/detail', id]).then();
  }


}
