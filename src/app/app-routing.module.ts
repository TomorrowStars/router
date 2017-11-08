import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';
import { ProductDescComponent } from "./product-desc/product-desc.component";
import { SellerInfoComponent } from "./seller-info/seller-info.component";
import { ChatComponent } from "./chat/chat.component";
import { LoginGuard } from "./guard/login.guard";
import { UnSavedGuard } from "./guard/unSaved.guard";
import { ProductResolve } from "./guard/product.resolve";

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
  ], 
    // canActivate: [LoginGuard],
    //  canDeactivate: [UnSavedGuard],
     resolve: {product: ProductResolve}
  },
  //在路由配置中传递数据
  // {path: 'product', component: ProductComponent, data:[{id:1}]},
  // 路径找不到时表示的模板
  {path: '**', component: Code404Component},
  //辅助路由
  {path: 'chat', component:ChatComponent, outlet:'aux'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnSavedGuard, ProductResolve]
})
export class AppRoutingModule { }
