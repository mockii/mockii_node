/**
 * Created by ChouhR01 on 1/11/2017.
 */
import { NgModule }      from '@angular/core';

import { SharedModule }   from '../shared/shared.module';
import { RecruiterRoutingModule } from './recruiter-routing.module';
import { RecruiterService } from './recruiter.service';

@NgModule({
    imports:      [ RecruiterRoutingModule, SharedModule ],
    declarations: [ RecruiterRoutingModule.components ],
    providers:    [ RecruiterService ]
})
export class RecruiterModule { }