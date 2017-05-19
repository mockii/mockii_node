import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { GrowlerModule } from './growler/growler.module';
import { ModalModule } from './modal/modal.module';

import { HeaderNavbarComponent } from './navbar/header/header.navbar.component';
import { FooterNavbarComponent } from './navbar/footer/footer.navbar.component';
import { DataService } from './services/data.service';
import { FilterService } from './services/filter.service';
import { SorterService } from './services/sorter.service';
import { TrackByService } from './services/trackby.service';
import { DialogService } from './services/dialog.service';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { ValidationService } from './services/validation.service';
import { AuthService } from'./services/auth.service';
import {TranslatePipe} from "./pipes/translate.pipe";
import {TranslateService} from "./services/translate.service";

@NgModule({
  imports: [ CommonModule, RouterModule, HttpModule, GrowlerModule, ModalModule, FormsModule ],
  exports: [ GrowlerModule, RouterModule, HttpModule, ModalModule, HeaderNavbarComponent, FooterNavbarComponent ],
  declarations: [ HeaderNavbarComponent, FooterNavbarComponent, TranslatePipe ],
  providers: [ SorterService, FilterService, DataService, TrackByService, 
               DialogService, ValidationService, AuthService, TranslateService ] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    //Ensure that CoreModule is only loaded into AppModule

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }  

}