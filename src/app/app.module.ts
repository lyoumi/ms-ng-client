import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserFormComponent } from './user-form/user-form.component';
import { SkillFilterPipe } from './pipes/skill-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,
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
