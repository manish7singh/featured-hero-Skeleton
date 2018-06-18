import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../_models/product';

@Injectable()
export class ProductListService {
     urlPath = "http://localhost:8765";
     product: Product;
    constructor(private http: HttpClient) { }
    
    getAll() {
        return this.http.get<Product[]>(this.urlPath+'/products');
    }

    productsByName(productName: String) {
        console.log("@@@"+productName);
        return this.http.get<Product>(this.urlPath+'/products/search/name/'+productName);
    }  

    getById(productId: String){
      
        return this.http.get<Product>(this.urlPath+'/products/search/id/'+productId);
    }

    addProduct(){

    }

}