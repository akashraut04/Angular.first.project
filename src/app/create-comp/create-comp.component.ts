import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import{EmployeeServiceService} from '../employee-service.service'

@Component({
  selector: 'app-create-comp',
  templateUrl: './create-comp.component.html',
  styleUrls: ['./create-comp.component.css']
})
export class CreateCompComponent implements OnInit {

  employee : Employee=new Employee();
  massage:any;


  constructor(private employeeServiceService : EmployeeServiceService) {  }

  ngOnInit(): void {
  }
  public creatEmployee(){
    this.employeeServiceService.create(this.employee).subscribe(data =>this.massage=data)
    // this.empl.doRegistration(this.user).subscribe((data)=>this.message=data);
      }

}
