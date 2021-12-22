import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartData } from 'src/app/orders/cart-data';
import { CartService } from 'src/app/orders/cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId=0;

  constructor(private route: ActivatedRoute,private service:ProductService,private fb:FormBuilder,private cartservice:CartService , private route1:Router) { }

  formValue!:FormGroup  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId= Number(params.get('id'));
    });

    this.getData()

    this.formValue = this.fb.group({
      qty :new FormControl(1)
    })

  }

  Productdata!:Product
  getData(){
    this.service.getProductById(this.productId).subscribe(data=>{
      this.Productdata = data 
    })
  }

  CartDataObj :CartData = new CartData()
  onSubmit(id:number){
   

    this.CartDataObj.quantity = Number(this.formValue.value.qty)
    this.CartDataObj.product_id = id
    

    this.cartservice.addtocart(this.CartDataObj).subscribe(res=>{    // it will add the value
      console.log(res)
      alert(id+" has been add successfully")
      localStorage.setItem("CartValue",String(Number(localStorage.getItem("CartValue"))+1))
    })
  }

  deleteprod(id:number){

    this.service.deleteProductById(id).subscribe(res=>{
      alert("Product has been deleted Successfully")
      this.route1.navigate(["/"])
    })

  }


}
