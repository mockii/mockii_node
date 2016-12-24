import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';
import { IntervieweeComponent } from './interviewee/interviewee.component';
import { AppHeaderComponent } from "./header/app-header.component";
import { HeroService } from './hero.service';
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'interviewee',
        component: IntervieweeComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DashboardComponent,
    IntervieweeComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
