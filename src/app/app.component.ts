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
  users: User[] = [
    { username: 'Vasya', age: 23, skills: [{title: 'Java', score: 9}, {title: 'SQL', score: 8}] },
    { username: 'Petya', age:20, skills: [{title: 'Angular', score: 6}, {title: 'HTTP', score: 7}] },
    null
  ]
  search: string;
  field: string;

  addUser(user: User) {
    this.users.unshift(user)
  }
}
