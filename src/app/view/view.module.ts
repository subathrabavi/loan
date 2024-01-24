import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewhomeComponent } from './viewhome/viewhome.component';
import { CustomerComponent } from './customer/customer.component';
import { StaffComponent } from './staff/staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddnewComponent } from './addnew/addnew.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';


@NgModule({
  declarations: [
    ViewhomeComponent,
    CustomerComponent,
    StaffComponent,AddnewComponent, LoandetailsComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class ViewModule { }
