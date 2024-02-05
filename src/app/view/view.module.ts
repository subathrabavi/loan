import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewhomeComponent } from './viewhome/viewhome.component';
import { CustomerComponent } from './customer/customer.component';
import { StaffComponent } from './staff/staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddnewComponent } from './addnew/addnew.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
<<<<<<< HEAD
import { AddstaffComponent } from './addstaff/addstaff.component';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';
import { UpdatestaffComponent } from './updatestaff/updatestaff.component';
=======
import { BranchComponent } from './branch/branch.component';
import { CompanyComponent } from './company/company.component';
import { ReportComponent } from './report/report.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
>>>>>>> 7ef381657b99b839285dc78da554022827fc5e6b


@NgModule({
  declarations: [
    ViewhomeComponent,
    CustomerComponent,
<<<<<<< HEAD
    StaffComponent,AddnewComponent, 
    StaffComponent,AddnewComponent, LoandetailsComponent, AddstaffComponent, ViewstaffComponent, UpdatestaffComponent, 
=======
    StaffComponent,AddnewComponent, LoandetailsComponent, BranchComponent, CompanyComponent, ReportComponent, AccountDetailsComponent
>>>>>>> 7ef381657b99b839285dc78da554022827fc5e6b
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class ViewModule { }
