import { Component } from '@angular/core';
import { SatffService } from '../satff.service';
import { Router } from '@angular/router';
import { Staffentity } from '../staffentity';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent {
  acopening: any;

  constructor(private details:SatffService,private r:Router){}
  p:Staffentity=new Staffentity();

  

  od=new FormGroup(
    {
  firstname:new FormControl("",[Validators.required,Validators.maxLength(10)]),
  lastname:new FormControl("",[Validators.required,Validators.maxLength(10)]),
  fathername:new FormControl("",Validators.required),
  mothername:new FormControl("",Validators.required),
  dob:new FormControl("",Validators.required),
  gender:new FormControl("",Validators.required),
  bloodgroup:new FormControl,
  dno:new FormControl("",Validators.required),
  street:new FormControl("",Validators.required),
  city:new FormControl("",Validators.required),
  pincodde:new FormControl("",Validators.required),
  email:new FormControl("",Validators.required),
  contact:new FormControl("",Validators.required),
  naminie:new FormControl,
  emergency_contact:new FormControl,
  marital_status:new FormControl,
  qualification:new FormControl("",Validators.required),
  passedout:new FormControl,
  extraskils:new FormControl,
  job_roll:new FormControl("",Validators.required),
  experiencce:new FormControl("",Validators.required),
  signature:new FormControl("",Validators.required),
  submitdate:new FormControl,
  image:new FormControl("",Validators.required),

 })

   get firstname(){
     return this.od.get('firstname')
   }
  get lastname(){
    return this.od.get('lastname')
  }
  get fathername(){
    return this.od.get('fathername')
  }
  get mothername(){
    return this.od.get('mothername')
  }
  get dob(){
    return this.od.get('dob')
  }
  get gender(){
    return this.od.get('gender')
  }
  get bloodgroup(){
    return this.od.get('bloodgroup')
  }
  get dno(){
    return this.od.get('dno')
  }
  get street(){
    return this.od.get('street')
  }
  get city(){
    return this.od.get('city')
  }
  get pincodde(){
    return this.od.get('pincodde')
  }
  get email(){
    return this.od.get('email')
  }get contact(){
    return this.od.get('contact')
  }
  get naminie(){
    return this.od.get('naminie')
  }
  get emergency_contact(){
    return this.od.get('emergency_contact')
  }
  get marital_status(){
    return this.od.get('marital_status')
  }
  get qualification(){
    return this.od.get('qualification')
  }

  get passedout(){
    return this.od.get('passedout')
  }
  get extraskils(){
    return this.od.get('extraskils')
  }

  get job_roll(){
    return this.od.get('job_roll')
  }

  get experiencce(){
    return this.od.get('experiencce')
  }

  get signatur(){
    return this.od.get('signatur')
  }
  get submitdate(){
    return this.od.get('submitdate')
  }
  get image(){
    return this.od.get('image')
  }
  onUpload(event: any) {
    const reader = new FileReader();
    if (event?.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.od.patchValue({
          image: reader.result as string | null // Adjust type assertion
        });
      };
    }
  }
  

  
  onSubmit(){
    

    this.p.firstName= (String)(this.od.controls.firstname.value);
    this.p.lastName=(String)(this.od.controls.lastname.value);
    this.p.fatherName=(String)(this.od.controls.fathername.value);
    this.p.mothername=(String)(this.od.controls.mothername.value);
    this.p.dob=(String)(this.od.controls.dob.value);
    this.p.gender=(String)(this.od.controls.gender.value);
    this.p.bloodgroup=(String)(this.od.controls.bloodgroup.value);
    this.p.dno=(Number)(this.od.controls.dno.value);
    this.p.street=(String)(this.od.controls.street.value);
    this.p.city=(String)(this.od.controls.city.value);
    this.p.pincodde=(Number)(this.od.controls.pincodde.value);
    this.p.email=(String)(this.od.controls.email.value);
    this.p.contact=(Number)(this.od.controls.contact.value);
    this.p.naminie=(String)(this.od.controls.naminie.value);
    this.p.emergency_contact=(Number)(this.od.controls.emergency_contact.value);
    this.p.marital_status=(String)(this.od.controls.marital_status.value);
    this.p.qualification=(String)(this.od.controls.qualification.value);
    this.p.passedout=(Number)(this.od.controls.passedout.value);
    this.p.extraskils=(String)(this.od.controls.extraskils.value);
    this.p.job_roll=(String)(this.od.controls. job_roll.value);
    this.p.experiencce=(String)(this.od.controls.experiencce.value);
    this.p.signature=(String)(this.od.controls.signature.value);
    this.p.submitdate=(String)(this.od.controls.submitdate.value);
    this.p.image=(String)(this.od.controls.image.value);


    
   
   
    this.details.postdetails(this.p).subscribe((Response)=>{
      this.p=Response;
      console.log(Response);  
      this.gotostaff();
      
    })
     
 }



  gotostaff(){
    this.r.navigate(['view','staff']);
  }
  


}
