import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryData !: Category[] 
  
  constructor(private service:ProductService) { }
  
  ngOnInit(): void {
    this.getCategoryData()
  }

  getCategoryData(){
    this.service.getCategories().subscribe(res=>{
      this.categoryData = res
    })
  }

}
