import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Candidate } from '../model/candidate';

@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.component.html',
  styleUrls: ['./new-candidate.component.css']
})
export class NewCandidateComponent implements OnInit {



  pic: string = "assets/images/download (7).jpg";
  pic1: string = "assets/images/download (8).jpg";

  candi: Candidate = new Candidate();

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  addCandidate(){
    console.log(this.candi);
    this._httpClient.post('http://localhost:7000/candidates', this.candi).subscribe(result =>{
      console.log(result)
      alert("Candidate successfully added!");
    }, error => {
      console.error(error);
    })
    
  }
  resetAll(){
    this.candi = new Candidate();
  }

}
