import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { SkillFilterPipe } from './pipes/skill-filter.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CorrelationIdInterceptor} from "./auth/correlationIdInterceptor";

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: CorrelationIdInterceptor,
  multi: true
}

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
