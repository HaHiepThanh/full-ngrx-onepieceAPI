import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'home',
    loadComponent: () => import('../app/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('../app/pages/detail/detail.component').then(m => m.DetailComponent)
  },
  {
    path: '',
    loadComponent: () => import('../app/pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('../app/pages/login/login.component').then(m => m.LoginComponent)
  }
];
