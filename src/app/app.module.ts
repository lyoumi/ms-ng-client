import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {FormsModule} from "@angular/forms";
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
