import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product';
import { ProductService } from 'src/app/products/product.service';
import { CartData } from '../cart-data';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  constructor(private productservice:ProductService,private cartservice:CartService) { }

  myProductData!:Product[]
  myCartData!:CartData[]


  ngOnInit(): void {

    this.getProd()
    this.getAllCart()
    
  }


  getProd(){
    this.productservice.getAllProduct().subscribe(data=>{
      this.myProductData = data
    })
  }

  getAllCart(){
    this.cartservice.getCart().subscribe(data=>{
      this.myCartData = data
      // console.log(this.myCartData.length)
      localStorage.setItem("CartValue",String(this.myCartData.length))
    })
  }

  deleteRow(id:number){
    this.cartservice.deleteCart(id).subscribe(data=>{
      alert("data successfully Deleted..")
      this.getAllCart()
      this.getProd()
    })
    
  }


}
