import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'product', component: ProductComponent},//在查询参数中传递数据
  {path: 'product/:id', component: ProductComponent},//在路由路径中传递数据
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
