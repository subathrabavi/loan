import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoanService } from '../loan.service';
import { Loan } from '../loan';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {


constructor(private ser:LoanService){}

loan= new FormGroup(
  {
  loan:new FormControl(),
income:new FormControl(),
useage :new FormControl(),
firstname :new FormControl(),
middlename :new FormControl(),
lastname :new FormControl(),
date:new FormControl(),
month:new FormControl(),
year:new FormControl(),
marrital :new FormControl(),
email :new FormControl(),
phone:new FormControl(),
street :new FormControl(),
address :new FormControl(),
city :new FormControl(),
state :new FormControl(),
pin:new FormControl(),
live :new FormControl(),
fname :new FormControl(),
lname :new FormControl(),
occupation :new FormControl(),
experience:new FormControl(),
monthlyincome:new FormControl(),
monthlyexpense:new FormControl(),
downpayment:new FormControl(),
comments :new FormControl(),
bankname :new FormControl(),
branchname :new FormControl(),
acnumber:new FormControl(),
ifsc :new FormControl(),
acname :new FormControl(),
mobile:new FormControl(),
consent :new FormControl(),
declaration :new FormControl(),
  }
);


posts(){
  const aa=this.loan.value as Loan;
  this.ser.post(aa).subscribe((res)=>{
    console.log(res);
  })
}

}


