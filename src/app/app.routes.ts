import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/input-screen/input-screen.component').then((m) => m.InputScreenComponent) },
  { path: 'summary', loadComponent: () => import('./components/summary-screen/summary-screen.component').then((m) => m.SummaryScreenComponent) },
];