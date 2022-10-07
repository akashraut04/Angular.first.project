import { Component, OnInit } from '@angular/core';
// import { Employee } from './employee';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New1_project';
employee: any;

  // employee : Employee[];
  constructor() {

  }

  // columns = ["employeeId" ,"employeeName" ,"companyId"];
  //  index =  ["emp_Id" , "emp_Name" , "com_Id"]

  // ngOnInit(): void {

  //   this.employeeService.getEmployee().subscribe(data =>{console.log(data),this.employee=data;});
    
  // }

  // press(){
  //  return this.employeeList.ngOnInit();
  // }

  }


