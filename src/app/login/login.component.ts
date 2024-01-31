import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { HttpClient } from '@angular/common/http';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  public loginForm:FormGroup
constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router,private signupservice:LoanService){}
logins:Login=new Login();

  ngOnInit(): void {
this.loginForm=this.formbuilder.group({
  name:['',[Validators.required]],
  password:['',[Validators.required]]
});
this.logins = new Login()
  }
login() {
  if (this.loginForm) {
    this.logins = {
      name: this.loginForm.get('name')?.value,
      password: this.loginForm.get('password')?.value
    };

    this.signupservice.login(this.logins).subscribe((res) => {
      console.log(res);
      if(res!=null) {
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['/view']);
      }
      else {
        alert("Invalid user")
      }
    });
  }
}

}
