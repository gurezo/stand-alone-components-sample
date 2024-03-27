export default [
  {
    path: '',
    loadComponent: () => import('./parent.component'),
    children: [
      {
        path: '',
        loadChildren: () => import('../child/child.routes'),
      },
    ],
  },
];
