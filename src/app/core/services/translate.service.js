"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by rakeshchouhan on 2/16/17.
 */
var core_1 = require("@angular/core");
var TranslateService = (function () {
    function TranslateService() {
        this.PLACEHOLDER = '%';
    }
    Object.defineProperty(TranslateService.prototype, "currentLanguage", {
        get: function () {
            return this._currentLanguage || this._defaultLanguage;
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.setDefaultLanguage = function (language) {
        this._defaultLanguage = language;
    };
    TranslateService.prototype.enableFallback = function (enable) {
        this._fallback = enable;
    };
    TranslateService.prototype.use = function (language) {
        // set current language
        this._currentLanguage = language;
    };
    TranslateService.prototype.translate = function (key) {
        // Call the Google Translators REST API here
        // https://googlecloudplatform.github.io/google-cloud-node/#/docs/translate/0.6.0/translate
        // https://scotch.io/tutorials/simple-language-translation-in-angular-2-part-2
        // Get the result of words from google translator API, replace the words and then finally bind it to model
        var translation = key;
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
    };
    TranslateService.prototype.replace = function (word, words) {
        var _this = this;
        if (word === void 0) { word = ''; }
        if (words === void 0) { words = ''; }
        var translation = word;
        var values = [].concat(words);
        values.forEach(function (e, i) {
            translation = translation.replace(_this.PLACEHOLDER.concat(i), e);
        });
        return translation;
    };
    TranslateService.prototype.instant = function (parameters) {
        var key = parameters.key, words = parameters.words;
        // public perform translation
        // const translation: string =
        // this.translate(key, words);
        // if (!words) return translation;
        // return this.replace(translation, words);
    };
    return TranslateService;
}());
TranslateService = __decorate([
    core_1.Injectable()
], TranslateService);
exports.TranslateService = TranslateService;
