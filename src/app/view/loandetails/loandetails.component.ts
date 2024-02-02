import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/loan';
import { LoanService } from 'src/app/loan.service';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.css']
})


export class LoandetailsComponent implements OnInit {
  loans:Loan[];
  constructor(private ser:LoanService,private route:Router){}
  
  
  ngOnInit(): void {
    this.getalls();
  }

  getalls(){
    this.ser.getall().subscribe((res)=>{
      this.loans=res;
    })
  }
 apply(){
  this.route.navigate(["/apply"])
 }


 acceptLoan(index: number) {
  alert('Loan accepted!');
  this.loans[index].status = 'accepted';
}

rejectLoan(index: number) {
  alert('Loan rejected!');
  this.loans[index].status = 'rejected';
}
}
