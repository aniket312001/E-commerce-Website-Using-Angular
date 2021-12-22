import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ProductData } from '../product-data';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  formValue!:FormGroup

   // creating object of Resto layout
  productDataObj :ProductData = new ProductData()

  constructor(private fb:FormBuilder , private service:ProductService) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      name : new FormControl("",[Validators.required]),
      decriptions : new FormControl("",[Validators.required]),
      category_id : new FormControl([Validators.required]),
      price :new FormControl([Validators.required]),
      is_available :new FormControl("",[Validators.required]),
      rating:new FormControl([Validators.required]),
      review:new FormControl([Validators.required]),
      vendor_name:new FormControl("",[Validators.required]),
      warenty:new FormControl([Validators.required]),
      img:new FormControl("")

    })

    


  }

  onSubmit(){
    // console.log(this.formValue.value.category_id)

    this.productDataObj.name = this.formValue.value.name
    this.productDataObj.decriptions = this.formValue.value.decriptions
    this.productDataObj.category_id = this.formValue.value.category_id
    this.productDataObj.price = this.formValue.value.price
    this.productDataObj.is_available = this.formValue.value.is_available
    this.productDataObj.rating = this.formValue.value.rating
    this.productDataObj.review = this.formValue.value.review
    this.productDataObj.vendor_name = this.formValue.value.vendor_name
    this.productDataObj.warenty = this.formValue.value.warenty
    this.productDataObj.img = this.formValue.value.img

    this.service.createProduct(this.productDataObj).subscribe(res=>{    // it will add the value
      console.log(res)
      alert("Restaurent Records Added Successfully !!")
      this.formValue.reset()
    })
  }

}
