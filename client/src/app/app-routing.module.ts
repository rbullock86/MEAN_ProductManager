import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductnewComponent } from './productnew/productnew.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductComponent },
  { path: "products/edit/:id", component: ProducteditComponent },
  { path: "products/new", component: ProductnewComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
