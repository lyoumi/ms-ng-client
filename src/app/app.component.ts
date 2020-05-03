import { Component } from '@angular/core';

export interface Skill {
  name: string
  level: string
}

export interface User {
  name: string
  email: string
  password: string
  skills: Skill[]
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = [
    { name: 'Vasya', email: 'pupokin@gmail.com', password: '123', skills: [{name: 'Java', level: 'Middle'}, {name: 'SQL', level: 'Junior'}] },
    { name: 'Petya', email: 'pe@gmail.com', password: '1231', skills: [{name: 'Angular', level: 'junior'}, {name: 'HTTP', level: 'Junior'}] },
    null
  ]
  search: string;
  field: string;

  addUser(user: User) {
    this.users.unshift(user)
  }
}
