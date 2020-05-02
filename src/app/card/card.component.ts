import {Component} from "@angular/core";
import {User} from "../app.component";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  title: string = 'Hello world'

  arr: User[] = [
      { username: 'Vasya', age: 23, skills: [{title: 'Java', score: 9}, {title: 'SQL', score: 8}] },
      { username: 'Petya', age:20, skills: [{title: 'Angular', score: 6}, {title: 'HTTP', score: 7}] },
      null
    ]

}
