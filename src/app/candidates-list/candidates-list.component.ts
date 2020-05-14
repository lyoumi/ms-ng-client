import { Component, OnInit } from '@angular/core';
import {CandidateService} from "../services/candidate.service";
import {Candidate} from "../shared/interfaces";

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styles: [
  ]
})
export class CandidatesListComponent implements OnInit {
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
