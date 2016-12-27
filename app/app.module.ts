import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { IntervieweeComponent } from './interviewee/interviewee.component';
import { AppHeaderComponent } from "./header/app-header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AppRoutingModule }     from './app-routing.module';
import {AdminService} from "./admin/admin.service";
import {TopicComponent} from "./admin/topic/topic.component";
import {DashboardService} from "./dashboard/dashboard.service";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DashboardComponent,
    IntervieweeComponent,
    TopicComponent
  ],
  providers: [
    AdminService,
    DashboardService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
