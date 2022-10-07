import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import{EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-get-comp',
  templateUrl: './get-comp.component.html',
  styleUrls: ['./get-comp.component.css']
})
export class GetCompComponent implements OnInit {

  employee :any;
  constructor(private empolyeeService: EmployeeServiceService) { }
  ngOnInit(): void {
  }
  getData(){
    this.empolyeeService.getEmployee().subscribe((data)=>this.employee=data);

  }

}
