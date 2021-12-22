import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  createProduct(data:any):Observable<Product>{
    const baseUrl = "http://localhost:3000/product"
    return this.http.post<Product>(baseUrl,data)
  }

  getAllProduct():Observable<Product[]>{
    const baseUrl = "http://localhost:3000/product"
    return this.http.get<Product[]>(baseUrl)

  }

  getProductById(id:number):Observable<Product>{
    const baseUrl = "http://localhost:3000/product/"+id
    return this.http.get<Product>(baseUrl)

  }

  updateProductById(id:number,data:any):Observable<Product>{
    const baseUrl = "http://localhost:3000/product/"+id
    return this.http.put<Product>(baseUrl,data)
  }

  deleteProductById(id:number):Observable<Product>{
    const baseUrl = "http://localhost:3000/product/"+id
    return this.http.delete<Product>(baseUrl)
  }


  getCategoryProduct(categoryId:number):Observable<Product[]>{
    const baseUrl = "http://localhost:3000/product/?category_id="+categoryId
    return this.http.get<Product[]>(baseUrl)

  }

  getCategories():Observable<Category[]>{
    const baseUrl = "http://localhost:3000/categories"
    return this.http.get<Category[]>(baseUrl)
  }

}
