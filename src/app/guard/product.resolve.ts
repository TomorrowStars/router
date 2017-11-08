import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/router";
import { Router} from "@angular/router";
import { Product } from "../product/product.component";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductResolve implements Resolve<Product> {

    constructor(private router: Router){
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
        let id: number = route.params["id"];
        if (id == 1) {
            return new Product(3, "iPhone8");
        }else{
            console.log("商品ID不是1，返回主界面");
            this.router.navigate(['/home']);
            return undefined;
        }
    }

}