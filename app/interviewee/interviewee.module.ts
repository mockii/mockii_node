/**
 * Created by ChouhR01 on 1/11/2017.
 */
import { NgModule }      from '@angular/core';

import { SharedModule }   from '../shared/shared.module';
import { IntervieweeRoutingModule } from './interviewee-routing.module';

@NgModule({
    imports:      [ IntervieweeRoutingModule, SharedModule ],
    declarations: [ IntervieweeRoutingModule.components ]
})
export class IntervieweeModule { }