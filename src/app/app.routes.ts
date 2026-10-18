import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'titles.home', loadComponent: () => import('./pages/home/home').then(m => m.HomePage) },
  { path: 'storia', title: 'titles.story', loadComponent: () => import('./pages/storia/storia').then(m => m.StoriaPage) },
  { path: 'olio', title: 'titles.oil', loadComponent: () => import('./pages/olio/olio').then(m => m.OlioPage) },
  { path: 'ospitalita', title: 'titles.stay', loadComponent: () => import('./pages/ospitalita/ospitalita').then(m => m.OspitalitaPage) },
  { path: '**', redirectTo: '' },
];
