import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../model/candidate';
import { UserService } from '../user';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  pic: string = "assets/images/download (7).jpg";
  pic1: string = "assets/images/download (8).jpg";

  user: any = {
    username: "",
    password: ""
  }

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  onClick(){
   if(this.user.username === "Clearance" && this.user.password === "Morumudi"){
     alert("Good luck for your test!");
     this._router.navigate(["/onlinetest"]);
   } else {
     alert("Incorrect password or username");
     this._router.navigate(["/candidate-form"]);
   }
  }

}
