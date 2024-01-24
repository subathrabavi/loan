import { Component, OnInit } from '@angular/core';
import { AcopeningService } from '../acopening.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id:number;
  constructor(private ser:AcopeningService,private act:ActivatedRoute,private route:Router){}
  
  
  ngOnInit(): void {
    this.id=this.act.snapshot.params['id'];
    this.deletes();
  }


  deletes(){
    this.ser.delete(this.id).subscribe((res)=>{
      this.route.navigate(['view','customer'])
    })
  }

}
