import { Component, OnInit } from '@angular/core';
import { AcopeningService } from '../acopening.service';
import { Acopening } from '../acopening';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  acOpen:Acopening= new Acopening();

  id:number;
 
  constructor(private ser:AcopeningService,private act:ActivatedRoute){}
  
  
  ngOnInit(): void {
   this.id= this.act.snapshot.params['id'];
    this.getId();
  }


  getId(){
    this.ser.getid(this.id).subscribe((res)=>{
      this.acOpen=res;
    })
  }

}
