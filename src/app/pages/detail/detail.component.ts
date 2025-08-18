import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router, RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {CharacterState} from '../../ngrx/onepiece/onepiece.state';
import {CharacterItemModel} from '../../module/characterItem.model';
import {Observable, Subscription} from 'rxjs';
import * as CharacterActions from '../../ngrx/onepiece/onepiece.actions';
import {AsyncPipe, NgClass} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {ProductState} from '../../ngrx/product/product.state';

@Component({
  selector: 'app-detail',
  imports: [
    AsyncPipe,
    MatProgressSpinnerModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    NgClass,
    MatButton,
    RouterOutlet
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit ,OnDestroy {

  characterDetail$!: Observable<CharacterItemModel>;
  subscriptions: Subscription[] = [];
  isLoading$!: Observable<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private store:Store<{
      character: CharacterState,
      product: ProductState,
    }>
  ){
    let {id} = this.activatedRoute.snapshot.params;
    console.log('Character ID:', id);
    this.characterDetail$ = this.store.select('character', 'characterDetail');
    this.isLoading$ = this.store.select('character', 'isLoading');
    this.store.dispatch(CharacterActions.getOnepieceCharacterById({id:id}));
  }

  ngOnInit() {
    this.subscriptions.push(
      this.characterDetail$.subscribe((character:CharacterItemModel)=>{
        console.log(character);
      }),
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  navigateToHome() {
    this.router.navigate(['/home']).then();
  }


}
