import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoanService } from '../loan.service';
import { Loan } from '../loan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {


constructor(private ser:LoanService,private route:Router){}

loan= new FormGroup(
  {
loan:new FormControl('',[Validators.required]),
income:new FormControl('',[Validators.required]),
useage :new FormControl('',[Validators.required]),
firstname :new FormControl('',[Validators.required]),
middlename :new FormControl('',[Validators.required]),
lastname :new FormControl('',[Validators.required]),
date:new FormControl('',[Validators.required]),
month:new FormControl('',[Validators.required]),
year:new FormControl('',[Validators.required]),
marrital :new FormControl('',[Validators.required]),
email :new FormControl('',[Validators.required]),
phone:new FormControl('',[Validators.required]),
street :new FormControl('',[Validators.required]),
address :new FormControl('',[Validators.required]),
city :new FormControl('',[Validators.required]),
state :new FormControl('',[Validators.required]),
pin:new FormControl('',[Validators.required]),
live :new FormControl('',[Validators.required]),
fname :new FormControl('',[Validators.required]),
lname :new FormControl('',[Validators.required]),
occupation :new FormControl('',[Validators.required]),
experience:new FormControl('',[Validators.required]),
monthlyincome:new FormControl('',[Validators.required]),
monthlyexpense:new FormControl('',[Validators.required]),
downpayment:new FormControl('',[Validators.required]),
comments :new FormControl('',[Validators.required]),
bankname :new FormControl('',[Validators.required]),
branchname :new FormControl('',[Validators.required]),
acnumber:new FormControl('',[Validators.required]),
ifsc :new FormControl('',[Validators.required]),
acname :new FormControl('',[Validators.required]),
mobile:new FormControl('',[Validators.required]),
consent :new FormControl('',[Validators.required]),
declaration :new FormControl('',[Validators.required]),
image:new FormControl()
  }
);


onUpload(event: any) {
  const reader = new FileReader();
  if (event?.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.loan.patchValue({
        image: reader.result as string | null // Adjust type assertion
      });
    };
  }
}


posts(){
  const aa=this.loan.value as unknown as Loan;
  this.ser.post(aa).subscribe((res)=>{
    console.log(res);
    alert("Form Submitted Successfully")
    this.loan.reset();
    // this.route.navigate(['view','loandetails'])
  
    
  })
}

}


