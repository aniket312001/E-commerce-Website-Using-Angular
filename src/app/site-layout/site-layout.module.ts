import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteLayoutRoutingModule } from './site-layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SiteLayoutRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,

  ]
})
export class SiteLayoutModule { }
