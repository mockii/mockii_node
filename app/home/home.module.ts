/**
 * Created by ChouhR01 on 1/11/2017.
 */
import { NgModule }      from '@angular/core';

import { SharedModule }   from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './home.service';

@NgModule({
    imports:      [ HomeRoutingModule, SharedModule ],
    declarations: [ HomeRoutingModule.components ],
    providers: [ HomeService ] // these should be singleton
})
export class HomeModule { }