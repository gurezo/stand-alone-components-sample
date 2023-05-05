import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./parent.routes').then((m) => m.parentRoutes),
  },
];
