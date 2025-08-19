import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Auth} from '@angular/fire/auth';
import {Store} from '@ngrx/store';
import {AuthState} from './ngrx/auth/auth.state';
import * as AuthActions from './ngrx/auth/auth.actions';
import * as ProductActions from './ngrx/product/product.actions';
import {ProductModel} from './module/product.model';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatIconButton, MatIconModule, RouterLink, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'demo-full-ngrx';
  subscriptions: Subscription[] = [];
  idToken$ !: Observable<string>
  idToken: string = '';

  constructor(
    private auth: Auth,
    private store: Store<{
      auth: AuthState
    }>
  ) {

    this.idToken$ = this.store.select('auth','IdToken')
    this.auth.onAuthStateChanged(async (auth:any) =>{
      if (auth) {

        let idToken = await auth.getIdToken()
        const user = {
          uid: auth.uid,
          displayName: auth.displayName,
          email: auth.email,
          photoURL: auth.photoURL
        }
        this.store.dispatch(AuthActions.storeCurrentUser({user:user, IdToken: idToken}))
        this.store.dispatch(ProductActions.getAllProducts({idToken: this.idToken}));
      } else {
        console.log('No user is signed in.');
      }
    })
  }

  ngOnInit() {
    this.subscriptions.push(
      this.idToken$.subscribe((idToken:string) => {
        if (idToken) {
          console.log('ID Token:', idToken);
          this.idToken = idToken;
        }
      })

    )
  }
}
