import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { SkillFilterPipe } from './pipes/skill-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    CandidateFormComponent,
    SkillFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
