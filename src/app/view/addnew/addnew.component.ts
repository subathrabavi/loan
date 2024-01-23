import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Acopening } from 'src/app/acopening';
import { AcopeningService } from 'src/app/acopening.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent  {


  constructor(private ser:AcopeningService,private route:Router){}



  acopening= new FormGroup(
  {
    prefix:new FormControl(),
    firstname:new FormControl(),
    lastname:new FormControl(),
    month:new FormControl(),
    day:new FormControl(),
    year:new FormControl(),
    mothersmaidenName:new FormControl(),
    telephoneNumber:new FormControl(),
    email:new FormControl(),
    streetAddress:new FormControl(),
    streetAddressLine2:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    pincode:new FormControl(),
    country:new FormControl(),
    educationLevel:new FormControl(),
    formofIdentification:new FormControl(),
    uploadId: new FormControl<string | null>(null, [Validators.required]),
    accountType:new FormControl(),
    accountCategory:new FormControl(),
    monthlySalary:new FormControl(),






  }
);

onUpload(event: any) {
  const reader = new FileReader();
  if (event?.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.acopening.patchValue({
        uploadId: reader.result as string | null // Adjust type assertion
      });
    };
  }
}


posts(){
  const a=this.acopening.value as Acopening
  
  this.ser.post(a).subscribe((res)=>{
    this.route.navigate(['view','customer']);
  })
}



  

  

}
