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

/* Logging
*
*
*    OFF = 0,
*    ERROR = 1,
*    WARN = 2,
*    INFO = 3,
*    DEBUG = 4,
*    LOG = 5,
*
*  import { Logger } from "angular2-logger/core"; // Default Logger set to WARN (Level 2) by default
*  import { OFF_LOGGER_PROVIDERS } from "angular2-logger/core"; // Level 0
*  import { ERROR_LOGGER_PROVIDERS } from "angular2-logger/core"; // Level 1
*  import { WARN_LOGGER_PROVIDERS } from "angular2-logger/core"; // Level 2
*  import { INFO_LOGGER_PROVIDERS } from "angular2-logger/core"; // Level 3
*  import { DEBUG_LOGGER_PROVIDERS } from "angular2-logger/core"; // Level 4
*
* */


import { LOG_LOGGER_PROVIDERS } from "angular2-logger/core"; // Level 5

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
    /*Logger,
      OFF_LOGGER_PROVIDERS,
      DEBUG_LOGGER_PROVIDERS,
      ERROR_LOGGER_PROVIDERS,
      WARN_LOGGER_PROVIDERS,
      INFO_LOGGER_PROVIDERS,*/
      LOG_LOGGER_PROVIDERS,
      AdminService,
      DashboardService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
