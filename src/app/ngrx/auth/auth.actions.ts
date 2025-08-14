import {createAction, props} from '@ngrx/store';

export const login = createAction(
  '[Auth] login'
)

export const loginSuccess = createAction(
  '[Auth] loginSuccess'
)

export const loginFailure = createAction(
  '[Auth] loginFailure', props<{error:any}>()
)

export const storeCurrentUser = createAction(
  '[Auth] storeCurrentUser', props<{user:any, IdToken:string}>()
)

export const logout = createAction(
  '[Auth] logout'
)

export const logoutSuccess = createAction(
  '[Auth] logoutSuccess'
)

export const logoutFailure = createAction(
  '[Auth] logoutFailure', props<{error:any}>()
)
