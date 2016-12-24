import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { IntervieweeComponent } from './interviewee/interviewee.component';
import { AppHeaderComponent } from "./header/app-header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AppRoutingModule }     from './app-routing.module';
import {AdminService} from "./admin/admin.service";
import {TopicComponent} from "./admin/topic/topic.component";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DashboardComponent,
    IntervieweeComponent,
    TopicComponent,
  ],
  providers: [
    AdminService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
