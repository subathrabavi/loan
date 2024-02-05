import { Component, OnInit } from '@angular/core';
import { SatffService } from '../satff.service';
import { Router } from '@angular/router';
import { Staffentity } from '../staffentity';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit{
  constructor(private staffservice:SatffService, private r:Router){}
  
  details:Staffentity[];

  getall():void{
     this.staffservice.getalldetails().subscribe((responce=>{
      this.details=responce;
      console.log(responce)
    }));
  }
  ngOnInit(): void {
    this.getall();
  }
  
gotoAdd(){
  this.r.navigate(['view/addstaff'])
  }
  
gotoview(){
  this.r.navigate(['view'])
}

deleteitem(id:number):void{
  this.staffservice.deletedetails(id).subscribe((responce)=>{
 //this.products=responce;
  console.log(responce);
  this.getall()
},
error=>console.log(error)) }

}

