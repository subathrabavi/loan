import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { Userlogin } from '../userlogin';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  public userloginForm: FormGroup;
  logins: Userlogin = new Userlogin();

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private signupservice: LoanService
  ) {}

  ngOnInit(): void {
    this.userloginForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.click(); // Reset the form initially
  }

  login(event: Event) {
    event.preventDefault(); // Prevent default form submission

    if (this.userloginForm.valid) {
      this.logins = {
        name: this.userloginForm.get('name')?.value,
        password: this.userloginForm.get('password')?.value
      };

      this.signupservice.userlogin(this.logins).subscribe((res) => {
        console.log(res);
        if (res != null) {
          localStorage.setItem('user', JSON.stringify(res));
          this.router.navigate(['/apply']);

          // Reset the form after successful login
          this.click();
        } else {
          alert('Invalid user');
        }
      });
    }
  }

  click() {
    this.userloginForm.reset();
  }

}
