import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acopening } from './acopening';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcopeningService {

  private baseurl = 'http://localhost:8080/acopening/';

  constructor(private http: HttpClient) { }

  post(ac: Acopening): Observable<Acopening> {
    return this.http.post<Acopening>(`${this.baseurl}post`, ac);
  }

  getall(): Observable<Acopening[]> {
    return this.http.get<Acopening[]>(`${this.baseurl}getall`);
  }

  getid(id: number): Observable<Acopening> {
    return this.http.get<Acopening>(`${this.baseurl}getid/${id}`);
  }

  delete(id: number): Observable<Acopening> {
    return this.http.delete<Acopening>(`${this.baseurl}delete/${id}`);
  }
  getAccountDetails(acNumber: number): Observable<any> {
    return this.http.get(`${this.baseurl}getAccount/${acNumber}`);
  }

  deposit(acNumber: number, amount: number): Observable<any> {
    return this.http.post(`${this.baseurl}deposit/${acNumber}/${amount}`, {});
  }

  withdraw(acNumber: number, amount: number): Observable<any> {
    return this.http.post(`${this.baseurl}withdraw/${acNumber}/${amount}`, {});
  }
}
