import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'task2',
    loadComponent: () => import('./task2/task2.page').then((m) => m.Task2Page),
  },
  //{
  //path: 'task3',
  //loadComponent: () => import('./task3/task3.page').then((m) => m.Task3Page),
  //},
];
