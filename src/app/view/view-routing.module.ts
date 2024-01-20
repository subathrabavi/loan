import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewhomeComponent } from './viewhome/viewhome.component';
import { StaffComponent } from './staff/staff.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:"",component:ViewhomeComponent},
  {path:"staff",component:StaffComponent},
  {path:"customer",component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
