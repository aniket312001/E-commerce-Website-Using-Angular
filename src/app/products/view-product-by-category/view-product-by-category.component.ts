import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartData } from 'src/app/orders/cart-data';
import { CartService } from 'src/app/orders/cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  productId=0;
  productList !: Product[]

  constructor(private service:ProductService,private route: ActivatedRoute,private cartService: CartService) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId= Number(params.get('category_id')); console.log(this.productId)
      this.getData()
    });

    
  }


  getData(){
    this.service.getCategoryProduct(this.productId).subscribe(data=>{
      this.productList = data 
     
      // console.log(this.productList)
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
