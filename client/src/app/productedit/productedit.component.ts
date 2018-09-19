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
  feValErrors;
  beValErrors;

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
      this.beValErrors = {
        price : {message: ""},
        title : {message: ""}
      }
    })
  }

  getProduct(id){
    let obs = this._httpService.getProduct(id);
    obs.subscribe(data => {
      this.product = data;
    })
  }

  putProduct(){
    this.errorsReset(this.beValErrors);
    console.log("pre observable beValErrors:", this.beValErrors);
    let obs = this._httpService.putProduct(this.product._id, this.product);
    obs.subscribe(data => {
      console.log("Updated Product Data", data)
      // backend validations return errors here
      if(data['errors']){
        if(data['errors']['price']){
          this.beValErrors['price'] = data['errors']['price'];
        }
        if(data['errors']['title']){
          this.beValErrors['title'] = data['errors']['title'];
        }
        console.log("beValErrors:", this.beValErrors);
        // reset product data
        this.getProduct(this.product._id);
      }
      else{
        this._router.navigate(["/products"])
      }
    })
  }

  errorsReset(errors){
    errors['title']['message'] = "";
    errors['price']['message'] = "";
  }

  deleteProduct(id){
    console.log("DeleteProduct clicked, id:", id);
    let obs = this._httpService.deleteProduct(id);
    obs.subscribe(data => {
      console.log("Delete Data:", data);
    })
    this._router.navigate(["/products"])
  }
  
}
