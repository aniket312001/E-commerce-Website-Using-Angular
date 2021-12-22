import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartData } from './cart-data';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  // addToCartList(productId:number,quantity:number=1):Observable<any>{
  //   return this.http.post
  // }


  addtocart(data:any):Observable<CartData>{
    return this.http.post<CartData>("http://localhost:3000/cart",data)
  }


  getCart():Observable<CartData[]>{
    return this.http.get<CartData[]>("http://localhost:3000/cart")
  }


  deleteCart(id:number):Observable<CartData>{
    return this.http.delete<CartData>("http://localhost:3000/cart/"+id)
  }

}
