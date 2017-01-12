/**
 * Created by ChouhR01 on 1/11/2017.
 */
import { NgModule }      from '@angular/core';

import { SharedModule }   from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    imports:      [ AdminRoutingModule, SharedModule ],
    declarations: [ AdminRoutingModule.components ]
})
export class AdminModule { }