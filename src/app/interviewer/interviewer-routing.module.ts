/**
 * Created by ChouhR01 on 1/11/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterviewerComponent } from './interviewer.component';

const routes: Routes = [
    { path: '', component: InterviewerComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class InterviewerRoutingModule {
    static components = [ InterviewerComponent ];
}