import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Candidate} from "../app.component";

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  @Input() candidate: Candidate

  constructor() { }

  ngOnInit(): void {
  }
}
