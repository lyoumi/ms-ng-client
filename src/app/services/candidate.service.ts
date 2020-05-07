import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Candidate} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private httpClient: HttpClient) { }

  getAllCandidates() {
    return this.httpClient.get<Candidate[]>('candidate', );
  }

  createCandidate(candidate: Candidate) {
    return this.httpClient.post<Candidate>('candidate', candidate);
  }

  deleteCandidate(id: String) {
    return this.httpClient.delete(`/candidate/${id}`);
  }
}
