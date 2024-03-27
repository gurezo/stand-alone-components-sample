export default [
  {
    path: '',
    loadComponent: () => import('./child.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('../grand-child/grand-child.component'),
      },
    ],
  },
];
