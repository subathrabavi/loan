import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewhomeComponent } from './viewhome/viewhome.component';
import { CustomerComponent } from './customer/customer.component';
import { StaffComponent } from './staff/staff.component';


@NgModule({
  declarations: [
    ViewhomeComponent,
    CustomerComponent,
    StaffComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
