import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) { }

  getProducts(){
    return this._http.get('/api/products');
  }

  getProduct(id){
    return this._http.get('/api/products/' + id);
  }

  putProduct(id, body){
    return this._http.put('/api/products/' + id, body);
  }

  postProduct(body){
    return this._http.post('/api/products', body);
  }

  deleteProduct(id){
    return this._http.delete('/api/products/' + id);
  }
}
