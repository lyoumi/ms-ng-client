import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { SkillFilterPipe } from './pipes/skill-filter.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CorrelationIdInterceptor} from "./auth/correlationId.interceptor";
import {HomeComponent} from "./home/home.component";
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import {AppRoutingModule} from "./app-routing.module";

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
    SkillFilterPipe,
    HomeComponent,
    CandidatesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
