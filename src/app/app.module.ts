import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BlogdetailComponent } from './blogdetail/blogdetail.component'
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent,
    ApplyComponent,
      ServiceComponent,
      AboutComponent,BlogComponent,
     
      
      
      ContactComponent,
      NavbarComponent,
      FooterComponent,
      BlogdetailComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
