import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  pic: string = "assets/images/A58BD878-E8B0-4EFA-99E8-D2A3C5DD3CC4 3.png";
  pic1: string = "assets/images/abstract-background-design-vector-6684225.jpg";
  pic2: string = "assets/images/go_w01_grader_h3_Media.jpg";

  employeeList: any;

  employee: Employee = new Employee();
  

  constructor(private _htppClient: HttpClient) { }

  ngOnInit(): void {
    this._htppClient.get('http://localhost:3000/employees').subscribe(result => {
      this.employeeList = result;
      console.log(this.employeeList);
    }, error => {
      console.error(error);
    })
  }


  addEmployee(){
    console.log(this.employee);
    this._htppClient.post('http://localhost:3000/employees', this.employee).subscribe(result => {
      console.log(result);
      alert('Employee successfully added')
    }, error => {
      console.error(error);
    })
  }

 
}
