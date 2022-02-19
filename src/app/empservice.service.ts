import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private http:HttpClient) { }

  public getEmps():Observable<Emp[]>{
    return this.http.get<Emp[]>("http://localhost:3000/emp")
 }
}
