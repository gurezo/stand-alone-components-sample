import { Routes } from '@angular/router';

export const childRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./child.component').then((m) => m.ChildComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../grand-child/grand-child.component').then(
            (m) => m.GrandChildComponent
          ),
      },
    ],
  },
];
