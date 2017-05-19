import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports: [ ReactiveFormsModule, SharedModule, SearchRoutingModule ],
  declarations: [ SearchRoutingModule.components ]
})
export class SearchModule { }