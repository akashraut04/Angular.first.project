import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import{ Employee } from '../employee'

@Component({
  selector: 'app-delete-comp',
  templateUrl: './delete-comp.component.html',
  styleUrls: ['./delete-comp.component.css']
})
export class DeleteCompComponent implements OnInit {

  employee : Employee;
  massage:any;
  constructor(private employeeService :EmployeeServiceService) { }

  ngOnInit(): void {
  }

  deleteData(){

    this.employeeService.deleteEmployee(this.employee).subscribe(data =>this.massage=data)
  }

}
  