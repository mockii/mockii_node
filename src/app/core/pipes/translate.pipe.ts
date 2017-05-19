/**
 * Created by rakeshchouhan on 2/16/17.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service'; // our translate service

@Pipe({
    name: 'translate',
    pure: false // impure pipe, update value when we change language
})

export class TranslatePipe implements PipeTransform {

    constructor(private translateService: TranslateService) { }

    transform(value: string, args: string | string[]): any {
        if (!value) return;

        return this.translateService.instant({key: value, words: Array<any>()});
    }
}
