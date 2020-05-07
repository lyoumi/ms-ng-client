import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Candidate} from "../app.component";

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  @Input() candidate: Candidate
  @Output() onDelete: EventEmitter<String> = new EventEmitter<String>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteCandidate(id: String) {
    this.onDelete.emit(id);
  }
}
