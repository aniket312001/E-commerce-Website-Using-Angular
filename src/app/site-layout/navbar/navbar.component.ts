import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  value:any
  ngOnInit(): void {

    setInterval(() => {
      this.value= localStorage.getItem("CartValue")
    }, 500);
  
  }
  
}
