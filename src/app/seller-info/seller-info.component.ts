import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {
  sellerID: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.sellerID = this.routeInfo.snapshot.params["sellerID"];
  }

}
