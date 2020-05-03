import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../app.component";

@Pipe({
  name: 'skillFilter',
  pure: false
})
export class SkillFilterPipe implements PipeTransform {

  transform(users: User[], searchText: string, field: string): User[] {
    if (!searchText || !searchText.trim()) {
      return users;
    }
    switch (field) {
      case 'username':
        return users
          .filter(user => user && user.name)
          .filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()))
      case 'level':
        return users
          .filter(user => user && user.skills)
          .filter(user => {
            return user.skills
              .filter(skill => skill && skill.level)
              .map(skill => skill.level)
              .filter(skillLevel => skillLevel.toLowerCase().includes(searchText.toLowerCase()))
              .length > 0;
          });
      default:
        return users
          .filter(user => user && user.skills)
          .filter(user => {
            return user.skills
              .filter(skill => skill && skill.name)
              .map(skill => skill.name)
              .filter(skillName => skillName.toLowerCase().includes(searchText.toLowerCase()))
              .length > 0;
          });
    }
  }

}
