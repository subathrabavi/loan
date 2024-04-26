import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewhomeComponent } from './viewhome/viewhome.component';
import { CustomerComponent } from './customer/customer.component';
import { StaffComponent } from './staff/staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddnewComponent } from './addnew/addnew.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { BranchComponent } from './branch/branch.component';
import { CompanyComponent } from './company/company.component';
import { ReportComponent } from './report/report.component';
import { AccountDetailsComponent } from './account-details/account-details.component';


@NgModule({
  declarations: [
    ViewhomeComponent,
    CustomerComponent,
    StaffComponent,AddnewComponent, LoandetailsComponent, BranchComponent, CompanyComponent, ReportComponent, AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ViewModule { }
