import { Candidate } from "./model/candidate";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable()
export class UserService {
    userList: Array<Candidate> = [];

    constructor(private _httpClient: HttpClient){ }

    loginCandidate(user: Candidate): Observable<Candidate>{
        return this._httpClient.post<Candidate>('http://localhost:3000/candidates', user);
    }

    getCandidate(): Observable<Candidate[]>{
        return this._httpClient.get<Candidate[]>('http://localhost:3000/candidates');
    }
}