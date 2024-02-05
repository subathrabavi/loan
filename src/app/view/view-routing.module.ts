import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewhomeComponent } from './viewhome/viewhome.component';
import { StaffComponent } from './staff/staff.component';
import { CustomerComponent } from './customer/customer.component';
import { AddnewComponent } from './addnew/addnew.component';
import { ShowdetailsComponent } from '../showdetails/showdetails.component';
import { DeleteComponent } from '../delete/delete.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
<<<<<<< HEAD
import { AddstaffComponent } from './addstaff/addstaff.component';
=======
import { BranchComponent } from './branch/branch.component';
import { CompanyComponent } from './company/company.component';
import { ReportComponent } from './report/report.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
>>>>>>> 7ef381657b99b839285dc78da554022827fc5e6b

const routes: Routes = [
  {path:"",component:ViewhomeComponent},
  {path:"staff",component:StaffComponent},
  {path:"customer",component:CustomerComponent},
  {path:"addNew",component:AddnewComponent},
  {path:"show/:id",component:ShowdetailsComponent},
  {path:"delete/:id",component:DeleteComponent},
  {path:"loandetails",component:LoandetailsComponent},
<<<<<<< HEAD
  {path:"addstaff",component:AddstaffComponent}
=======
  {path:"branch",component:BranchComponent},
  {path:"company",component:CompanyComponent},
  {path:"report",component:ReportComponent},
  {path:"account",component:AccountDetailsComponent}
>>>>>>> 7ef381657b99b839285dc78da554022827fc5e6b
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
