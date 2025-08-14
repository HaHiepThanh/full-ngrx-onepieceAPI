import {AuthState} from './auth.state';
import {combineReducers, createReducer, on} from '@ngrx/store';
import * as AuthActions from './auth.actions';
import {Actions} from '@ngrx/effects';

export const initialState: AuthState = {
  currentUser: null,
  IdToken: '',
  isLoading: false,
  error: null,
}

export const authReducer = createReducer(
  initialState,

  on(AuthActions.login, (state, {type})=>{
    console.log(type);
    return {
      ...state,
      isLoading: true,
      error: null,
    }
  }),

  on(AuthActions.storeCurrentUser, (state, {IdToken,type, user})=>{
    console.log(type);
    return {
      ...state,
      currentUser: user,
      IdToken: IdToken,
      isLoading: false,
      error: null,
    }
  }),

  on(AuthActions.loginFailure, (state,{type,error})=>{
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error,
    }
  }),

  on(AuthActions.loginSuccess, (state, {type})=>{
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: null,
    }
  }),

  on(AuthActions.logout,(state, {type})=>{
    console.log(type);
    return {
      ...state,
      isLoading: true,
      error: null,
    }
  }),

  on(AuthActions.logoutSuccess, (state, {type})=>{
    console.log(type);
    return {
      ...state,
      currentUser: null,
      IdToken: '',
      isLoading: false,
      error: null,
    }
  }),

  on(AuthActions.logoutFailure, (state, {type,error})=>{
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: null,
    }
  }),

)
