import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {CandidateValidator} from "./candidateValidator";
import {Candidate} from "../shared/interfaces";
import {CandidateService} from "../services/candidate.service";

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent implements OnInit {

  form: FormGroup;

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.initForm();
  }

  submit() {
    if (this.form.valid) {
      let candidate: Candidate = this.form.value;
      this.candidateService.createCandidate(candidate)
        .subscribe(() => {
          this.form.reset();
          this.initForm();
        });
    }
  }

  addSkill() {
    const skill: FormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      level: new FormControl('junior')
    });

    (this.form.get('skills') as FormArray).insert(0, skill);
  }

  get controls() {
    return (this.form.get('skills') as FormArray).controls;
  }

  private initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required], CandidateValidator.uniqEmail),
      age: new FormControl(18, [Validators.required, Validators.min(18)]),
      name: new FormControl('', Validators.required),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  }
}
