import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acopening } from './acopening';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcopeningService {

  
  baseurl="http://localhost:8080/acopening/"
  constructor(private http:HttpClient) { }

  post(ac:Acopening):Observable<Acopening>{
    return this.http.post<Acopening>(this.baseurl+'post',ac)
  }

  getall():Observable<Acopening[]>{
    return this.http.get<Acopening[]>(this.baseurl+'getall')
  }

  getid(id:number){
    return this.http.get<Acopening>(this.baseurl+'getid/'+id);
  }

  delete(id:number){
    return this.http.delete<Acopening>(this.baseurl+'delete/'+id)
  }
}
