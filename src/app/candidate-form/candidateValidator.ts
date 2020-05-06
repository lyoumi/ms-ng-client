import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class CandidateValidator {
  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        //TODO: replace with getting actual emails via httpClient
        if ([].includes(control.value)) {
          resolve({uniqEmail: true})
        } else {
          resolve(null)
        }
      }, 1000)
    })
  }
}
