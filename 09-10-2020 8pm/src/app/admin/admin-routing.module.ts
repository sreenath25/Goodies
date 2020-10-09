import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path:"", 
    component: AdminComponent,
    children: [
      {
        path: "", redirectTo: "categories"
      },
      {
        path: 'categories',
        outlet: 'rightPane',
        loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule),
      },
      {
        path: "category",
        outlet: "rightPane",
        loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule),
      }
      // {
      //   path:"categories", 
      //   component: CategoriesComponent,
      //   outlet: "rightPane",
      // },
      // {
      //   path:'edit-category/new', 
      //   component: CategoryComponent
      // },
      // {
      //   path:'edit-category/:id', 
      //   component: CategoryComponent,
      //   outlet: "rightPane",
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
