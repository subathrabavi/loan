import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewhomeComponent } from './viewhome/viewhome.component';
import { StaffComponent } from './staff/staff.component';
import { CustomerComponent } from './customer/customer.component';
import { AddnewComponent } from './addnew/addnew.component';
import { ShowdetailsComponent } from '../showdetails/showdetails.component';
import { DeleteComponent } from '../delete/delete.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { AddstaffComponent } from './addstaff/addstaff.component';

const routes: Routes = [
  {path:"",component:ViewhomeComponent},
  {path:"staff",component:StaffComponent},
  {path:"customer",component:CustomerComponent},
  {path:"addNew",component:AddnewComponent},
  {path:"show/:id",component:ShowdetailsComponent},
  {path:"delete/:id",component:DeleteComponent},
  {path:"loandetails",component:LoandetailsComponent},
  {path:"addstaff",component:AddstaffComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
