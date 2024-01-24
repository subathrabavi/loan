import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acopening } from 'src/app/acopening';
import { AcopeningService } from 'src/app/acopening.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{



  ac:Acopening[];

  
  constructor(private route:Router,private ser:AcopeningService){}
  
  
  ngOnInit(): void {
    this.getAll();
  }

  
  
  getAll(){
    this.ser.getall().subscribe((res)=>{
      this.ac=res;
    })
  }
  
  
  
  
  gotoNew(){
    this.route.navigate(['view','addNew']);
  }

  gotoView(id:number) {
    this.route.navigate(['view','show',id]);
    }

    gotoDelete(id:number) {
      this.route.navigate(['view','delete',id]);
      }

      gotoCust(){
        this.route.navigate(['view']);
      }

}
