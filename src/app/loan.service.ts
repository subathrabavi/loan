import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from './loan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  
  baseurl="http://localhost:8080/"
  constructor(private http:HttpClient) { }


post(loan:Loan):Observable<Loan>{
  return this.http.post<Loan>(this.baseurl+'postForm',loan)
}

}
