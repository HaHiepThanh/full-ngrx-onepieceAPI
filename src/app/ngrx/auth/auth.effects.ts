import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import * as AuthActions from './auth.actions';
import {catchError, from, map, of, switchMap} from 'rxjs';

export const authEffects = createEffect(
  (action$ = inject(Actions), authService = inject(AuthService)) =>{
    return action$.pipe(
      ofType(AuthActions.login),
      switchMap(()=>
      from(authService.login()).pipe(
        map(()=>{
          return AuthActions.loginSuccess()
        }),
        catchError((error)=>of(AuthActions.loginFailure({error:error})))
        )
      )
    )
  },
  {functional: true}
)

export const logoutEffects = createEffect(
  (action$ = inject(Actions), authService = inject(AuthService)) => {
    return action$.pipe(
      ofType(AuthActions.logout),
      switchMap(() =>
        from(authService.logout()).pipe(
          map(() => AuthActions.logoutSuccess()),
          catchError((error) => of(AuthActions.logoutFailure({error: error})))
        )
      )
    );
  },
  {functional: true}
)
