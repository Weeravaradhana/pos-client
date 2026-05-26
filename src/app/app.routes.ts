import { Routes } from '@angular/router';
import {HomePageContext} from './pages/home-page-context/home-page-context';
import {authGuard} from './guards/auth-guard';

export const routes: Routes = [
  {path:"", redirectTo: "/home/process", pathMatch: "full" },
  {path:"home",
    component:HomePageContext,
    children:[
      {path:"", redirectTo: "/home/process", pathMatch: "full" },

      {path:"process",
        loadComponent:() =>
          import('./pages/home-page/home-page').then(ob=>ob.HomePage),
        title:"POS | Home"
      },

      {path:"login",
        loadComponent:() =>
          import('./pages/auth/login/login').then(ob=>ob.Login),
        title:"POS | Login"
      },

      {path:"signup",
        loadComponent:() =>
          import('./pages/auth/register/register').then(ob=>ob.Register),
        title:"POS | Signup"
      },

    ]},

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard-page/dashboard-page').then((ob) => ob.DashboardPage),
    title: 'Dashboard',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard/customers',
        pathMatch: 'full',
      },
      {
        path: 'customers',
        loadComponent: () =>
          import('./pages/dashboard-page/inner-pages/customers/customers').then(
            (ob) => ob.Customers,
          ),
        title: 'Customer MGT',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/dashboard-page/inner-pages/products/products').then((ob) => ob.Products),
        title: 'Product MGT',
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./pages/dashboard-page/inner-pages/orders/orders').then((ob) => ob.Orders),
        title: 'Order MGT',
      },
      {
        path: 'place-order',
        loadComponent: () =>
          import('./pages/dashboard-page/inner-pages/place-order/place-order').then(
            (ob) => ob.PlaceOrder,
          ),
        title: 'Place Order',
      },
      {
        path: 'statistics',
        loadComponent: () =>
          import('./pages/dashboard-page/inner-pages/statistics/statistics').then(
            (ob) => ob.Statistics,
          ),
        title: 'Reports & Statistics',
      },
    ],
  },

  {path:"**",loadComponent:()=>
  import('./pages/not-found/not-found').then((ob)=>ob.NotFound),
    title:"404 | Not Found"
  },
];
