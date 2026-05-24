import { Routes } from '@angular/router';
import {HomePageContext} from './pages/home-page-context/home-page-context';

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

  {path:"dashboard", loadComponent:() =>
      import('./pages/dashboard-page/dashboard-page').then(ob=>ob.DashboardPage),
    title:"POS | Dashboard"
  },

  {path:"**",loadComponent:()=>
  import('./pages/not-found/not-found').then((ob)=>ob.NotFound),
    title:"404 | Not Found"
  },
];
