import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntervieweeComponent } from './interviewee/interviewee.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import {TopicComponent} from "./admin/topic/topic.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'interviewee',     component: IntervieweeComponent },
  { path: 'topic',     component: TopicComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
