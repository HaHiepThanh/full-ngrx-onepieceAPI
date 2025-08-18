import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';
import {Auth} from '@angular/fire/auth';
import {AuthService} from '../../service/auth/auth.service';
import {Store} from '@ngrx/store';
import {AuthState} from '../../ngrx/auth/auth.state';
import {Observable, Subscription} from 'rxjs';
import * as AuthActions from '../../ngrx/auth/auth.actions';

@Component({
  selector: 'app-login',
  imports: [
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  title = 'one-piece';

  currentUser$!: Observable<any>;
  IdToken$!: Observable<string>;
  subscriptions: Subscription[] = [];

  constructor(
    private router:Router,
    private auth:Auth,
    private authService:AuthService,
    private store:Store<{
      auth: AuthState,
    }>
  ) {
    this.currentUser$ = this.store.select('auth', 'currentUser');
    this.IdToken$ = this.store.select('auth','IdToken',)
    this.auth.onAuthStateChanged( async (auth:any)=>{
      if(auth){
        let IdToken = await auth.getIdToken();
        const user = {
          uid: auth.uid,
          displayName: auth.displayName,
          email: auth.email,
          photoURL: auth.photoURL,
        }
        this.store.dispatch(AuthActions.storeCurrentUser({user:user, IdToken: IdToken}));
      }else{
        console.log('No user is signed in');
      }
    });
  }

  ngOnInit() {
    this.subscriptions.push(
      // this.currentUser$.subscribe((user) => {
      //   if (user) {
      //     // console.log(user);
      //     this.store.dispatch(AuthActions.login());
      //   }
      // }),

      this.IdToken$.subscribe((IdToken:string) => {
        console.log(IdToken);
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  loginWithGoogle() {
    this.authService.login().then();
  }

  logout(){
    this.store.dispatch(AuthActions.logout());
  }

  navigateToHome() {
    this.router.navigate(['/home']).then();
  }

}
