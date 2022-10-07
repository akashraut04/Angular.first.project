import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import{ EmployeeServiceService } from '../employee-service.service'

@Component({
  selector: 'app-update-comp',
  templateUrl: './update-comp.component.html',
  styleUrls: ['./update-comp.component.css']
})
export class UpdateCompComponent implements OnInit {

  employee :Employee = new Employee();
  massage:any;
  constructor(private employeeService :EmployeeServiceService) { }

  ngOnInit(): void {
  }

  updateData(){
    this.employeeService.update(this.employee).subscribe(data =>this.massage=data)
  }

  

}
