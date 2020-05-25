import { Injectable } from '@angular/core';
import { Session } from './session.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  formData : Session;
  list : Session[];

  readonly rootURL = "http://localhost:61376/api";

  constructor(private http: HttpClient) { }

  GetSummationResult(formData: Session){

    const data = [formData.DigitX,formData.DigitY];

    return this.http.post(this.rootURL+ "/Summation/getSum",data);

  }

  PostData(formData: Session){

    return this.http.post(this.rootURL+ "/Summation/postSession",formData);
    
  }

  refreshList(){

    this.http.get(this.rootURL + "/Summation").toPromise().then(res => this.list = res as Session[])
  }

  deleteSession(id:number){
    return this.http.delete(this.rootURL + "/Summation/"+id);
  }
}
