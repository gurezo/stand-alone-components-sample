import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
  {
    path: '',
    // 通常の読み込み
    component: ParentComponent,
  },
  {
    path: 'parent',
    // 単一の遅延読み込み
    loadComponent: () =>
      import('./parent/parent.component').then((m) => m.ParentComponent),
  },
];
