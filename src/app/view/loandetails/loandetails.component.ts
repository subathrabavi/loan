import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/loan';
import { LoanService } from 'src/app/loan.service';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.css']
})
export class LoandetailsComponent implements OnInit {
  loans:Loan[];
  constructor(private ser:LoanService){}
  
  
  ngOnInit(): void {
    this.getalls();
  }

  getalls(){
    this.ser.getall().subscribe((res)=>{
      this.loans=res;
    })
  }

}
