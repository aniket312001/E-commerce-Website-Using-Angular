import { Component, OnInit, Output } from '@angular/core';
import { CartData } from '../orders/cart-data';
import { CartService } from '../orders/cart.service';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList !:Product[]
  constructor(private service : ProductService, private cartService:CartService) { }

  ngOnInit(): void {
      this.service.getAllProduct().subscribe(data=>{
      this.productList = data
    })
  
  }

  CartDataObj :CartData = new CartData()  // creating object
  addToCart(id:number){
    
    
    this.CartDataObj.product_id = id
    this.CartDataObj.quantity = 1

    this.cartService.addtocart(this.CartDataObj).subscribe(res=>{    // it will add the value
      console.log(res)
      alert(id+" has been add successfully")
      localStorage.setItem("CartValue",String(Number(localStorage.getItem("CartValue"))+1))
    })
    

  }



}
