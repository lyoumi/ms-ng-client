import { Component } from '@angular/core';

export interface Skill {
  title: string
  score: number
}

export interface User {
  username: string
  age: number
  skills: Skill[]
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
