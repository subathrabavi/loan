import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { LoginComponent } from './login/login.component';
import { CalcComponent } from './calc/calc.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
 
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"apply",component:ApplyComponent},
  {path: "", component:HomeComponent },
  {path:"service",component:ServiceComponent},
  {path:"about",component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'calculator',component:CalcComponent},
  {path:"blogdetail",component:BlogdetailComponent},
{path:"view",loadChildren:()=>import("./view/view.module").then(vm=>vm.ViewModule)},
{path:"login",component:LoginComponent},
{path:"userlogin",component:UserLoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
