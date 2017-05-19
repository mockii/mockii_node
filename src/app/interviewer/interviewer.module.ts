/**
 * Created by ChouhR01 on 1/11/2017.
 */
import { NgModule }      from '@angular/core';

import { SharedModule }   from '../shared/shared.module';
import { InterviewerRoutingModule } from './interviewer-routing.module';

@NgModule({
    imports:      [ InterviewerRoutingModule, SharedModule ],
    declarations: [ InterviewerRoutingModule.components ]
})
export class InterviewerModule { }