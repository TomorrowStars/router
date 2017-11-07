import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    //snapshot：参数快照
    //1,在查询参数中传递数据
    // this.productId = this.routeInfo.snapshot.queryParams["id"];
    //2,在路由路径中传递参数
    //非同一个页面时
    // this.productId = this.routeInfo.snapshot.params["id"];
    //同一个页面内路由时 利用参数订阅模式（防止A,B按钮路由时数据丢失）
    this.routeInfo.params.subscribe((params: Params) => this.productId = params["id"]);
    //3,在路由配置中传递数据
    // this.productId = this.routeInfo.snapshot.data[0]["id"];
  }

}
