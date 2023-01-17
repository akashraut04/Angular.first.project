import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
// import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private apiUrl ="http://localhost:8084/emp"

  constructor(private httpclient :HttpClient) { }
  
  
  getEmployee(){

    return this.httpclient.get(this.apiUrl+"/all")
  }


  create(employee) {
    return this.httpclient.post(this.apiUrl+"/post",employee,{responseType:'text' as 'json'})
  }

  update(employee){

    return this.httpclient.put(this.apiUrl+"/put",employee,{responseType:'text' as 'json'})
  }

  deleteEmployee(employee){
    return this.httpclient.delete(this.apiUrl+"/delete/"+employee);
  }
 
}
