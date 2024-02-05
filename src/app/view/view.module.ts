import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewhomeComponent } from './viewhome/viewhome.component';
import { CustomerComponent } from './customer/customer.component';
import { StaffComponent } from './staff/staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddnewComponent } from './addnew/addnew.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';
import { UpdatestaffComponent } from './updatestaff/updatestaff.component';


@NgModule({
  declarations: [
    ViewhomeComponent,
    CustomerComponent,
    StaffComponent,AddnewComponent, 
    StaffComponent,AddnewComponent, LoandetailsComponent, AddstaffComponent, ViewstaffComponent, UpdatestaffComponent, 
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class ViewModule { }
