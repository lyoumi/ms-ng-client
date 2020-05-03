import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Skill, User} from "../app.component";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  //replace with select
  //skillNames: string[] = ['Angular', 'Java', 'SQL', 'HTTP', 'Design Patters'];
  //skillScores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  @Output() onSave: EventEmitter<User> = new EventEmitter<User>()

  user: User = new class implements User {
    age: number;
    skills: Skill[] = [];
    username: string;
  }

  constructor() { }

  ngOnInit(): void {
  }

  addUser() {
    this.onSave.emit(this.user);
    this.cleanUpForm();
  }

  addSkill() {
    this.user.skills.push(new class implements Skill {
      score: number;
      title: string;
    })
  }

  private cleanUpForm() {
    this.user = new class implements User {
      age: number;
      skills: Skill[] = [];
      username: string;
    }
  }
}
