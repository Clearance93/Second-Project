import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guts';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlinetestComponent } from './onlinetest/onlinetest.component';
import { BackgroundDirective } from './background.directive';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewCandidateComponent } from './new-candidate/new-candidate.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    OnlinetestComponent,
    BackgroundDirective,
    HeaderComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    HomeComponent,
    EmployeesComponent,
    DashboardComponent,
    CandidateFormComponent,
    NewsLetterComponent,
    NewCandidateComponent,
    CandidatesComponent,
    PageNotFoundComponent,
    EmployeeLoginComponent,
    EmployeeListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
