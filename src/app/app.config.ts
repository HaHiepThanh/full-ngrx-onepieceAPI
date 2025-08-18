import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {characterReducer} from './ngrx/onepiece/onepiece.reducer';
import * as characterEffects from './ngrx/onepiece/onepiece.effects';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {authReducer} from './ngrx/auth/auth.reducer';
import * as authEffects from './ngrx/auth/auth.effects';
import {productReducer} from './ngrx/product/product.reducer';
import * as productEffects from './ngrx/product/product.effects';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      character: characterReducer,
      auth: authReducer,
      product: productReducer,
    }),
    provideEffects(
      characterEffects,
      authEffects,
      productEffects
    ),
    provideFirebaseApp(() => initializeApp({
      projectId: "buoi11-3669c", appId: "1:893427285820:web:ea1bfc5f3501d5596ee839",
      storageBucket: "buoi11-3669c.firebasestorage.app",
      apiKey: "AIzaSyC6pPVmiptErxQ19c4OUFC_kygkS56gaqU",
      authDomain: "buoi11-3669c.firebaseapp.com",
      messagingSenderId: "893427285820"
    })),
    provideAuth(() => getAuth()),
]
};
