/**
 * Created by ChouhR01 on 1/11/2017.
 */
import { NgModule }      from '@angular/core';

import { SharedModule }   from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';

@NgModule({
    imports:      [ DashboardRoutingModule, SharedModule ],
    declarations: [ DashboardRoutingModule.components ],
    providers: [ DashboardService ] // these should be singleton
})
export class DashboardModule { }