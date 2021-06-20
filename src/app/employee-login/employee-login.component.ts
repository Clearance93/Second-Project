import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {



  pic: string = "assets/images/A58BD878-E8B0-4EFA-99E8-D2A3C5DD3CC4 3.png";
  pic1: string = "assets/images/abstract-background-design-vector-6684225.jpg";
  pic2: string = "assets/images/go_w01_grader_h3_Media.jpg";


  user: any = {
    username: "",
    password: ""
  }


  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.user.username === "Clearance" && this.user.password === "Morumudi"){
      alert("Welcome Mr Morumudi");
      this._router.navigate(['/employees']);
    } else {
      alert("Incorrect username or password");
      this._router.navigate(['/candidate-form']);
    }
  }


}
