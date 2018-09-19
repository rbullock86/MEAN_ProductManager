import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {

  product;
  id;
  errors;

  constructor(
    private _httpService : HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { 
      this.product = {
        title : "",
        price : ""
      }
    }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this.getProduct(this.id);
      console.log("Errors", this.errors);
    })
  }

  getProduct(id){
    let obs = this._httpService.getProduct(id);
    obs.subscribe(data => {
      this.product = data;
    })
  }

  putProduct(){
    let obs = this._httpService.putProduct(this.product._id, this.product);
    obs.subscribe(data => {
      console.log("Updated Product Data", data)
      if(data['errors']){
        this.getProduct(this.product._id);
      }
      else{
        this._router.navigate(["/products"])
      }
    })
  }

  
}
