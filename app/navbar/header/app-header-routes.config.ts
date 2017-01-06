/**
 * Created by rakeshchouhan on 1/5/17.
 */
import { MenuType } from 'app/navbar/header/app-header.metadata';

import { AppHeaderComponent } from "app/navbar/header/app-header.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { IntervieweeComponent } from 'app/interviewee/interviewee.component';
import { InterviewerComponent } from 'app/interviewer/interviewer.component';
import { RecruiterComponent } from 'app/recruiter/recruiter.component';
import { AdminComponent } from 'app/admin/admin.component';
import { TopicComponent } from "app/admin/topic/topic.component";
import {Injectable} from "@angular/core";

export const ROUTES/*routesMenu*/: RouteInfo[] = [
    { path: '', title: '', redirectTo: '/dashboard', pathMatch: 'full', menuType: MenuType.BRAND },
    { path: 'dashboard', title: 'Home', component: DashboardComponent, menuType: MenuType.CENTER },
    { path: 'interviewee',  title: 'Interviewee', component: IntervieweeComponent, menuType: MenuType.CENTER },
    { path: 'interviewer',  title: 'Interviewer', component: InterviewerComponent, menuType: MenuType.CENTER },
    { path: 'recruiter',  title: 'Recruiter', component: RecruiterComponent, menuType: MenuType.CENTER },
    { path: 'admin',  title: 'Admin', component: AdminComponent, menuType: MenuType.CENTER }
    // { path: 'topic',     component: TopicComponent },
];

Injectable()
export class AppHeaderRoutingConfig {
    ROUTES = routesMenu;
    ROUTING_COMPONENTS = routingComponents;
}

export const routingComponents = [
    AppHeaderComponent,
    DashboardComponent,
    IntervieweeComponent,
    InterviewerComponent,
    RecruiterComponent,
    AdminComponent,
    TopicComponent
];