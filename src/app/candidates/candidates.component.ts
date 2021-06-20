import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {


  pic: string = "assets/images/download (7).jpg";
  pic1: string = "assets/images/download (8).jpg";

  candidateList: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:7000/candidates').subscribe(result => {
      this.candidateList = result;
      console.log(this.candidateList);
    }, error => {
      console.error(error);
    })
  }

}
