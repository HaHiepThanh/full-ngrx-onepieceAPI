import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../../module/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllProducts(idToken: string){
    return this.http.get<ProductModel[]>('http://localhost:3000/product',{
      headers:{
        Authorization:  idToken
      }
    });
  }

  getProductById(id: string, idToken: string) {
    return this.http.get<ProductModel>(`http://localhost:3000/product/get-by-id/${id}`,{
      headers:{
        Authorization: idToken
      }
    });
  }

  createProduct(product: ProductModel) {
    return this.http.post<ProductModel[]>('http://localhost:3000/product', product);
  }


}
