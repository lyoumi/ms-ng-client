import { Pipe, PipeTransform } from '@angular/core';
import {Candidate} from "../app.component";

@Pipe({
  name: 'skillFilter',
  pure: false
})
export class SkillFilterPipe implements PipeTransform {

  transform(candidates: Candidate[], searchText: string, field: string): Candidate[] {
    if (!searchText || !searchText.trim()) {
      return candidates;
    }
    switch (field) {
      case 'username':
        return candidates
          .filter(candidate => candidate && candidate.name)
          .filter(candidate => candidate.name.toLowerCase().includes(searchText.toLowerCase()))
      case 'level':
        return candidates
          .filter(candidate => candidate && candidate.skills)
          .filter(candidate => {
            return candidate.skills
              .filter(skill => skill && skill.level)
              .map(skill => skill.level)
              .filter(skillLevel => skillLevel.toLowerCase().includes(searchText.toLowerCase()))
              .length > 0;
          });
      default:
        return candidates
          .filter(candidate => candidate && candidate.skills)
          .filter(candidate => {
            return candidate.skills
              .filter(skill => skill && skill.name)
              .map(skill => skill.name)
              .filter(skillName => skillName.toLowerCase().includes(searchText.toLowerCase()))
              .length > 0;
          });
    }
  }

}
