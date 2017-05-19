/**
 * Created by rakeshchouhan on 2/16/17.
 */
import { Injectable, Inject, EventEmitter } from '@angular/core';

@Injectable()
export class TranslateService {
    private _currentLang: string;
    private PLACEHOLDER = '%';
    private _defaultLanguage: any;
    private _currentLanguage: any;
    private _fallback: boolean;

    public get currentLanguage() {
        return this._currentLanguage || this._defaultLanguage;
    }

    public setDefaultLanguage(language: any) {
        this._defaultLanguage = language;
    }

    public enableFallback(enable: boolean) {
        this._fallback = enable;
    }

    constructor() { }

    public use(language: any): void {
        // set current language
        this._currentLanguage = language;
    }

    private translate(key: string): string {
        // Call the Google Translators REST API here
        // https://googlecloudplatform.github.io/google-cloud-node/#/docs/translate/0.6.0/translate

        // https://scotch.io/tutorials/simple-language-translation-in-angular-2-part-2

        // Get the result of words from google translator API, replace the words and then finally bind it to model



        let translation = key;

        // found in current language
        /*if (this._translations[this.currentLanguage] && this._translations[this.currentLanguage][key]) {
            return this._translations[this.currentLanguage][key];
        }

        // fallback disabled
        if (!this._fallback) {
            return translation;
        }

        // found in default language
        if (this._translations[this._defaultLanguage] && this._translations[this._defaultLanguage][key]) {
            return this._translations[this._defaultLanguage][key];
        }*/

        // not found
        return translation;
    }

    public replace(word: string = '', words: string | string[] = '') {
        let translation: string = word;

        const values: string[] = [].concat(words);
        values.forEach((e, i) => {
            translation = translation.replace(this.PLACEHOLDER.concat(<any>i), e);
        });

        return translation;
    }

    public instant(parameters: { key: string, words: Array<any> }) {
        let {key, words} = parameters;
        // public perform translation
        // const translation: string =
        // this.translate(key, words);

        // if (!words) return translation;
        // return this.replace(translation, words);
    }
}
