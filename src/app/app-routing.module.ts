import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"apply",component:ApplyComponent},
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {path:"service",component:ServiceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
