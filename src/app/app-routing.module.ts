import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component'; 
import { OnlinetestComponent } from './onlinetest/onlinetest.component';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewCandidateComponent } from './new-candidate/new-candidate.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'onlinetest', component: OnlinetestComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'candidate-form', component: CandidateFormComponent},
  {path: 'news-letter', component: NewsLetterComponent},
  {path: 'new-candidate', component: NewCandidateComponent},
  {path: 'employee-login', component: EmployeeLoginComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'candidates', component: CandidatesComponent},

  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
