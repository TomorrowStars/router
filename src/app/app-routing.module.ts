import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';
import { ProductDescComponent } from "./product-desc/product-desc.component";
import { SellerInfoComponent } from "./seller-info/seller-info.component";

const routes: Routes = [
  //redirectTo :重定向
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  //在查询参数中传递数据
  {path: 'home', component: HomeComponent},
  // {path: 'product', component: ProductComponent},
  //在路由路径中传递数据
  //子路由
  {path: 'product/:id', component: ProductComponent,
   children:[
    {path:'', component: ProductDescComponent},
    {path:'sellerInfo/:sellerID', component: SellerInfoComponent},
  ]},
  //在路由配置中传递数据
  // {path: 'product', component: ProductComponent, data:[{id:1}]},
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
