import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
      { path: '', pathMatch: 'full', redirectTo: 'auth' },
      { 
        path: 'auth',
        loadChildren: () => import("./auth/auth.module").then(m=>m.AuthModule)
      },

      // {
      //   path: "dashboard",  component: AdminComponent
      // },
      // {
      //   path: "categories", 
      //   outlet: "rightPane", 
      //   component: CategoriesComponent

      // },

      // {
      //   path: "category/:id", 
      //   outlet: "rightPane", 
      //   component: CategoryComponent,
      // }
      { 
        path: 'dashboard',
        loadChildren: () => import("./admin/admin.module").then(m=>m.AdminModule),
        // outlet: 'rightPane',
      },
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
