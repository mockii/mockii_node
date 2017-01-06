import { NgModule } from '@angular/core';
import {RouterModule, Routes, RouterLink, RouterLinkActive, RouterOutlet, RouterOutletMap} from '@angular/router';

import { AppHeaderRoutingConfig } from 'app/navbar/header/app-header-routes.config';

import { AppHeaderComponent } from "app/navbar/header/app-header.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { IntervieweeComponent } from 'app/interviewee/interviewee.component';
import { InterviewerComponent } from 'app/interviewer/interviewer.component';
import { RecruiterComponent } from 'app/recruiter/recruiter.component';
import { AdminComponent } from 'app/admin/admin.component';
import { TopicComponent } from "app/admin/topic/topic.component";

import { AdminService } from "./admin/admin.service";
import { DashboardService } from "./dashboard/dashboard.service";

const routes: Routes = [
  { path: '', title: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', title: 'Home', component: DashboardComponent },
  { path: 'interviewee',  title: 'Interviewee', component: IntervieweeComponent },
  { path: 'interviewer',  title: 'Interviewer', component: InterviewerComponent },
  { path: 'recruiter',  title: 'Recruiter', component: RecruiterComponent },
  { path: 'admin',  title: 'Admin', component: AdminComponent }
  // { path: 'topic',     component: TopicComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  // declerations: [
  //     ROUTES,
  //     RouterOutlet
  // ],
  providers: [
      AdminService,
      DashboardService,
      RouterOutletMap
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
    // routes: RouteInfo[];
    // routingComponents: [];
    //
    // constructor(private routeConfig: AppHeaderRoutingConfig){
    //     this.routes = routeConfig.ROUTES;
    //     this.routingComponents = routeConfig.ROUTING_COMPONENTS;
    // }
}

// export const routingComponents = routingComponents;
export const routingComponents = [
    AppHeaderComponent,
    DashboardComponent,
    IntervieweeComponent,
    InterviewerComponent,
    RecruiterComponent,
    AdminComponent,
    TopicComponent
];
