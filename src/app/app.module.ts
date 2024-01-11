import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    ApplyComponent,
      ServiceComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
