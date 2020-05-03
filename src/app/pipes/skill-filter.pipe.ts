import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../app.component";

@Pipe({
  name: 'skillFilter'
})
export class SkillFilterPipe implements PipeTransform {

  transform(users: User[], searchText: string, field: string): User[] {
    if (!searchText || !searchText.trim()) {
      return users;
    }
    switch (field) {
      case 'username':
        return users
          .filter(user => user && user.username)
          .filter(user => user.username.toLowerCase().includes(searchText.toLowerCase()))
      case 'age':
        return users
          .filter(user => user && user.age)
          .filter(user => user.age.toString() === searchText)
      case 'score':
        return users
          .filter(user => user && user.skills)
          .filter(user => {
            return user.skills
              .filter(skill => skill && skill.score)
              .map(skill => skill.score)
              .filter(score => score.toString() === searchText)
              .length > 0;
          });
      default:
        return users
          .filter(user => user && user.skills)
          .filter(user => {
            return user.skills
              .filter(skill => skill && skill.title)
              .map(skill => skill.title)
              .filter(title => title.toLowerCase().includes(searchText.toLowerCase()))
              .length > 0;
          });
    }
  }

}
