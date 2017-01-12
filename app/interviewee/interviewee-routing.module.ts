/**
 * Created by ChouhR01 on 1/11/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntervieweeComponent } from './interviewee.component';

const routes: Routes = [
    { path: '', component: IntervieweeComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class IntervieweeRoutingModule {
    static components = [ IntervieweeComponent ];
}