import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { ListOrderComponent } from './list-order/list-order.component';


@NgModule({
  declarations: [
    ListOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  exports:[
    
  ]
})
export class OrdersModule { }
