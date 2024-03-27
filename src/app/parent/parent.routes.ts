import { Routes } from '@angular/router';

export const parentRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./parent/parent.component').then((m) => m.ParentComponent),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./child.routes').then((mod) => mod.childRoutes),
      },
    ],
  },
];
