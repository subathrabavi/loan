import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from './loan';
import { Observable } from 'rxjs';
import { Signup } from './signup';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  
  baseurl="http://localhost:8080/"
  constructor(private http:HttpClient) { }


post(loan:Loan):Observable<Loan>{
  return this.http.post<Loan>(this.baseurl+'postForm',loan)
}

sign(sign:Signup):Observable<Signup>{
  return this.http.post<Signup>(this.baseurl+'sign',sign)
}
login(login:Login):Observable<Login>{
  return this.http.post<Login>(this.baseurl+'log',login)
}
}
