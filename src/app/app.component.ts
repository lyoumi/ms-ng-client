import {Component, OnInit} from '@angular/core';
import {CandidateService} from "./services/candidate.service";
import {log} from "util";

export interface Skill {
  name: string
  level: string
}

interface Address {
  country: string
  city: string
}

export interface Candidate {
  id: String
  name: string
  email: string
  age: number
  skills: Skill[]
  address: Address
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private candidateService: CandidateService) {
  }

  candidates: Candidate[] = [];
  search: string;
  field: string;

  addCandidate(candidate: Candidate) {
    this.candidateService.createCandidate(candidate)
      .subscribe(candidate => {
        console.log(candidate);
        this.candidates.push(candidate);
      })
  }

  deleteCandidate(id: String) {
    this.candidateService.deleteCandidate(id).subscribe(() => {
      this.candidates = this.candidates.filter(c => c.id !== id);
    })
  }

  ngOnInit(): void {
    this.candidateService.getAllCandidates().subscribe(response => {
      console.log(response);
      this.candidates = response;
    })
  }
}
