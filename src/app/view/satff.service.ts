import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Staffentity } from './staffentity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SatffService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8080/staff";

  getalldetails():Observable<Staffentity[]>{
    return this.http.get<Staffentity[]>(`${this.url}/getAll`)
  }
getdetails(id:number):Observable<Staffentity>{
  return this.http.get<Staffentity>(`${this.url}/get/${id}`)
}
postdetails(details:Staffentity):Observable<Staffentity>{
  return this.http.post<Staffentity>(`${this.url}/post`,details)
}
upadtedetails(id:number,details:Staffentity):Observable<Staffentity>{
  return this.http.put<Staffentity>(`${this.url}/put/${id}`,details)
}
deletedetails(id:number):Observable<Staffentity>{
  return this.http.delete<Staffentity>(`${this.url}/delete/${id}`)
}


}
