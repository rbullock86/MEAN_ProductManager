import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-productnew',
  templateUrl: './productnew.component.html',
  styleUrls: ['./productnew.component.css']
})
export class ProductnewComponent implements OnInit {

  product = {};
  beValErrors = {};

  constructor(private _httpService : HttpService) { }

  ngOnInit() {
    this.resetProduct();
    console.log(this.beValErrors);
    this.beValErrors = {
      price : {message: ""},
      title : {message: ""}
    }
  }

  postProduct(){
    this.resetErrors(this.beValErrors);
    let obs = this._httpService.postProduct(this.product);
    obs.subscribe(data => {
      console.log("PostProduct Data:", data);
      // backend vals
      if (data['errors']){
        if(data['errors']['price']){
          this.beValErrors['price'] = data['errors']['price'];
        }
        if(data['errors']['title']){
          this.beValErrors['title'] = data['errors']['title'];
        }        
      }
      else{
        this.resetProduct();
        this.resetErrors(this.beValErrors);
      }
    })
  }

  resetErrors(errors){
    errors['price']['message'] = "";
    errors['title']['message'] = "";
  }

  resetProduct(){
    this.product['price'] = null;
    this.product['title'] = "";
    this.product['image'] = "";
  }

}
