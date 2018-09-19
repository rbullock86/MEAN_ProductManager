import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  _products;

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    console.log("Initializing product page")
    this.getProducts();
  }

  getProducts(){
    let obs = this._httpService.getProducts();
    obs.subscribe(data => {
      console.log("GetProductsData:", data);
      this._products = data;
    })
  }
}
