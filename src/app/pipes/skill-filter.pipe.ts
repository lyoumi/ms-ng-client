import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../app.component";

@Pipe({
  name: 'skillFilter'
})
export class SkillFilterPipe implements PipeTransform {

  transform(users: User[], searchText: string): User[] {
    if (!searchText || !searchText.trim()) {
      return users;
    }
    return users.filter(user => {
      if (!user || !user.skills) {
        return false;
      }
      return user.skills
        .filter(skill => skill && skill.title)
        .map(skill => skill.title)
        .filter(title => title.toLowerCase().includes(searchText.toLowerCase()))
        .length > 0;
    });
  }

}
