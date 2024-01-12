import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { RouterModule } from '@angular/router';
import { ServiceComponent } from './service/service.component';
<<<<<<< HEAD
import { BlogComponent } from './blog/blog.component';
=======
import { AboutComponent } from './about/about.component';
>>>>>>> 0aa52d2e8679c6e4a79e1836b98a908291384ce9


@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent,
    ApplyComponent,
      ServiceComponent,
<<<<<<< HEAD
      BlogComponent
=======
      AboutComponent
>>>>>>> 0aa52d2e8679c6e4a79e1836b98a908291384ce9
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
