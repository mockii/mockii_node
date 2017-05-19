import { Component } from '@angular/core';
import { Logger } from "angular2-logger/core";
import { TranslateService } from "./core/services/translate.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor( private _logger: Logger, private translateService: TranslateService ){
        this._logger.error('This is a priority level 1 error message...');
        this._logger.warn('This is a priority level 2 warning message...');
        this._logger.info('This is a priority level 3 warning message...');
        this._logger.debug('This is a priority level 4 debug message...');
        this._logger.log('This is a priority level 5 log message...');

        // set default language
        this.translateService.setDefaultLanguage({
            languageName: 'English',
            subtext: '',
            icon: '',
            localeName: 'en'
        });
        this.translateService.enableFallback(true);
    }
}
