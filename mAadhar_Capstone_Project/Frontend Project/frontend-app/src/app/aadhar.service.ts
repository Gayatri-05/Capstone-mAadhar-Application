import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aadhar } from './aadhar';

@Injectable({
  providedIn: 'root'
})
export class AadharService {

  baseUrl:string ="http://localhost:9090/aadhar"

  constructor(public http:HttpClient) { }

  newAadhar(aadhar:any):Observable<string> {
    return this.http.post(this.baseUrl+"/newAadhar",aadhar,{responseType:"text"});
  }

  updateAadhar(aadhar:any):Observable<string> {
    return this.http.patch(this.baseUrl+"/updateAadhar",aadhar,{responseType:"text"});
  }

  findAllAadhar():Observable<Aadhar[]> {
    return this.http.get<Aadhar[]>(this.baseUrl+"/findAllAadhar");
  }

  findAllAadharById(applicationid:number):Observable<string> {
    return this.http.get(this.baseUrl+"/findAllAadhar/"+applicationid,{responseType:"text"});
  }

  deleteAadharById(applicationid:number):Observable<string> {
    return this.http.delete(this.baseUrl+"/deleteAadhar/"+applicationid,{responseType:"text"});
  }

}
