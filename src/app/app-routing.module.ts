import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CandidateFormComponent} from "./candidate-form/candidate-form.component";
import {CandidatesListComponent} from "./candidates-list/candidates-list.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'form', component: CandidateFormComponent},
  {path: 'candidates', component: CandidatesListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
