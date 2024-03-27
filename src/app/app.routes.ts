export default [
  {
    path: '',
    loadChildren: () => import('./parent/parent.routes'),
  },
];
