import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserValidator} from "./user.validator";
import {User} from "../app.component";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Output() onSave: EventEmitter<User> = new EventEmitter<User>()

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required], UserValidator.uniqEmail),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      name: new FormControl('', Validators.required),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    if (this.form.valid) {
      let user: User = this.form.value;
      this.onSave.emit(user);
      console.log(user);
      this.form.reset()
    }
  }

  addSkill() {
    const skill: FormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      level: new FormControl('junior')
    });

    (this.form.get('skills') as FormArray).insert(0, skill)
  }

  get controls() {
    return (this.form.get('skills') as FormArray).controls
  }
}
