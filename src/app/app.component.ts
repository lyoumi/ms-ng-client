import { Component } from '@angular/core';

export interface Skill {
  name: string
  level: string
}

export interface Candidate {
  name: string
  email: string
  age: number
  skills: Skill[]
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  candidates: Candidate[] = [
    { name: 'Vasya', email: 'pupokin@gmail.com', age: 23, skills: [{name: 'Java', level: 'Middle'}, {name: 'SQL', level: 'Junior'}] },
    { name: 'Petya', email: 'pe@gmail.com', age: 42, skills: [{name: 'Angular', level: 'junior'}, {name: 'HTTP', level: 'Junior'}] },
    null
  ]
  search: string;
  field: string;

  addCandidate(candidate: Candidate) {
    this.candidates.unshift(candidate)
  }
}
