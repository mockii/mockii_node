"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var FooterNavbarComponent = (function () {
    function FooterNavbarComponent(router, authService, growlerService, translateService) {
        this.router = router;
        this.authService = authService;
        this.growlerService = growlerService;
        this.translateService = translateService;
    }
    FooterNavbarComponent.prototype.ngOnInit = function () {
        this.languageOptions = [
            {
                languageName: 'Afrikaans',
                subtext: '',
                icon: '',
                localeName: 'af'
            },
            {
                languageName: 'Albanian',
                subtext: '',
                icon: '',
                localeName: 'sq'
            },
            {
                languageName: 'Amharic',
                subtext: '',
                icon: '',
                localeName: 'am'
            },
            {
                languageName: 'Arabic',
                subtext: '',
                icon: '',
                localeName: 'ar'
            },
            {
                languageName: 'Armenian',
                subtext: '',
                icon: '',
                localeName: 'hy'
            },
            {
                languageName: 'Azerbaijani',
                subtext: '',
                icon: '',
                localeName: 'az'
            },
            {
                languageName: 'Basque',
                subtext: '',
                icon: '',
                localeName: 'eu'
            },
            {
                languageName: 'Belarusian',
                subtext: '',
                icon: '',
                localeName: 'be'
            },
            {
                languageName: 'Bengali',
                subtext: '',
                icon: '',
                localeName: 'bn'
            },
            {
                languageName: 'Bosnian',
                subtext: '',
                icon: '',
                localeName: 'bs'
            },
            {
                languageName: 'Bulgarian',
                subtext: '',
                icon: '',
                localeName: 'bg'
            },
            {
                languageName: 'Burmese',
                subtext: '',
                icon: '',
                localeName: 'my'
            },
            {
                languageName: 'Cantonese',
                subtext: '',
                icon: '',
                localeName: 'zh-yue'
            },
            {
                languageName: 'Catalan',
                subtext: '',
                icon: '',
                localeName: 'ca'
            },
            {
                languageName: 'Cebuano',
                subtext: '',
                icon: '',
                localeName: 'ceb'
            },
            {
                languageName: 'Central Kurdish',
                subtext: '',
                icon: '',
                localeName: 'ckb'
            },
            {
                languageName: 'Cherokee',
                subtext: '',
                icon: '',
                localeName: 'chr'
            },
            {
                languageName: 'Chinese (Simplified, China)',
                subtext: '',
                icon: '',
                localeName: 'zh-Hans'
            },
            {
                languageName: 'Chinese (Simplified)',
                subtext: '',
                icon: '',
                localeName: 'zn-CN'
            },
            {
                languageName: 'Chinese (Traditional, Taiwan)',
                subtext: '',
                icon: '',
                localeName: 'zh-Hant'
            },
            {
                languageName: 'Chinese (Traditional)',
                subtext: '',
                icon: '',
                localeName: 'zh-TW'
            },
            {
                languageName: 'Croatian',
                subtext: '',
                icon: '',
                localeName: 'hr'
            },
            {
                languageName: 'Czech',
                subtext: '',
                icon: '',
                localeName: 'cs'
            },
            {
                languageName: 'Danish',
                subtext: '',
                icon: '',
                localeName: 'da'
            },
            {
                languageName: 'Dutch',
                subtext: '',
                icon: '',
                localeName: 'nl'
            },
            {
                languageName: 'Dzongkha',
                subtext: '',
                icon: '',
                localeName: 'dz'
            },
            {
                languageName: 'English',
                subtext: '',
                icon: '',
                localeName: 'en'
            },
            {
                languageName: 'Esperanto',
                subtext: '',
                icon: '',
                localeName: 'eo'
            },
            {
                languageName: 'Estonian',
                subtext: '',
                icon: '',
                localeName: 'et'
            },
            {
                languageName: 'Filipino',
                subtext: '',
                icon: '',
                localeName: 'fil'
            },
            {
                languageName: 'Filipino',
                subtext: '',
                icon: '',
                localeName: 'tl'
            },
            {
                languageName: 'Finnish',
                subtext: '',
                icon: '',
                localeName: 'fi'
            },
            {
                languageName: 'French',
                subtext: '',
                icon: '',
                localeName: 'fr'
            },
            {
                languageName: 'Galician',
                subtext: '',
                icon: '',
                localeName: 'gl'
            },
            {
                languageName: 'Georgian',
                subtext: '',
                icon: '',
                localeName: 'ka'
            },
            {
                languageName: 'German',
                subtext: '',
                icon: '',
                localeName: 'de'
            },
            {
                languageName: 'Greek',
                subtext: '',
                icon: '',
                localeName: 'el'
            },
            {
                languageName: 'Gujarati',
                subtext: '',
                icon: '',
                localeName: 'gu'
            },
            {
                languageName: 'Haitian',
                subtext: '',
                icon: '',
                localeName: 'ht'
            },
            {
                languageName: 'Hebrew',
                subtext: '',
                icon: '',
                localeName: 'he'
            },
            {
                languageName: 'Hindi',
                subtext: '',
                icon: '',
                localeName: 'hi'
            },
            {
                languageName: 'Hmong',
                subtext: '',
                icon: '',
                localeName: 'hmn'
            },
            {
                languageName: 'Hungarian',
                subtext: '',
                icon: '',
                localeName: 'hu'
            },
            {
                languageName: 'Icelandic',
                subtext: '',
                icon: '',
                localeName: 'is'
            },
            {
                languageName: 'Indonesian',
                subtext: '',
                icon: '',
                localeName: 'id'
            },
            {
                languageName: 'Inuktitut',
                subtext: '',
                icon: '',
                localeName: 'iu'
            },
            {
                languageName: 'Irish',
                subtext: '',
                icon: '',
                localeName: 'ga'
            },
            {
                languageName: 'Italian',
                subtext: '',
                icon: '',
                localeName: 'it'
            },
            {
                languageName: 'Japanese',
                subtext: '',
                icon: '',
                localeName: 'ja'
            },
            {
                languageName: 'Javanese',
                subtext: '',
                icon: '',
                localeName: 'jv'
            },
            {
                languageName: 'Javanese',
                subtext: '',
                icon: '',
                localeName: 'jw'
            },
            {
                languageName: 'Kannada',
                subtext: '',
                icon: '',
                localeName: 'kn'
            },
            {
                languageName: 'Kazakh',
                subtext: '',
                icon: '',
                localeName: 'kk'
            },
            {
                languageName: 'Khmer',
                subtext: '',
                icon: '',
                localeName: 'km'
            },
            {
                languageName: 'Korean',
                subtext: '',
                icon: '',
                localeName: 'ko'
            },
            {
                languageName: 'Kurdish',
                subtext: '',
                icon: '',
                localeName: 'ku'
            },
            {
                languageName: 'Kyrgyz',
                subtext: '',
                icon: '',
                localeName: 'ky'
            },
            {
                languageName: 'Lao',
                subtext: '',
                icon: '',
                localeName: 'lo'
            },
            {
                languageName: 'Latin',
                subtext: '',
                icon: '',
                localeName: 'la'
            },
            {
                languageName: 'Latvian',
                subtext: '',
                icon: '',
                localeName: 'lv'
            },
            {
                languageName: 'Lisu',
                subtext: '',
                icon: '',
                localeName: 'lis'
            },
            {
                languageName: 'Lithuanian',
                subtext: '',
                icon: '',
                localeName: 'alt'
            },
            {
                languageName: 'Macedonian',
                subtext: '',
                icon: '',
                localeName: 'mk'
            },
            {
                languageName: 'Malagasy',
                subtext: '',
                icon: '',
                localeName: 'mg'
            },
            {
                languageName: 'Malay',
                subtext: '',
                icon: '',
                localeName: 'ms'
            },
            {
                languageName: 'Malayalam',
                subtext: '',
                icon: '',
                localeName: 'ml'
            },
            {
                languageName: 'Maltese',
                subtext: '',
                icon: '',
                localeName: 'mt'
            },
            {
                languageName: 'Maori',
                subtext: '',
                icon: '',
                localeName: 'mi'
            },
            {
                languageName: 'Marathi',
                subtext: '',
                icon: '',
                localeName: 'mr'
            },
            {
                languageName: 'Mongolian',
                subtext: '',
                icon: '',
                localeName: 'mn'
            },
            {
                languageName: 'Navajo',
                subtext: '',
                icon: '',
                localeName: 'nv'
            },
            {
                languageName: 'Nepali',
                subtext: '',
                icon: '',
                localeName: 'ne'
            },
            {
                languageName: 'Norwegian Nynorsk',
                subtext: '',
                icon: '',
                localeName: 'nn'
            },
            {
                languageName: 'Norwegian',
                subtext: '',
                icon: '',
                localeName: 'nb'
            },
            {
                languageName: 'Norwegian',
                subtext: '',
                icon: '',
                localeName: 'no'
            },
            {
                languageName: 'Nyanja',
                subtext: '',
                icon: '',
                localeName: 'ny'
            },
            {
                languageName: 'Oriya',
                subtext: '',
                icon: '',
                localeName: 'oy'
            },
            {
                languageName: 'Pashto',
                subtext: '',
                icon: '',
                localeName: 'ps'
            },
            {
                languageName: 'Persian',
                subtext: '',
                icon: '',
                localeName: 'fa'
            },
            {
                languageName: 'Polish',
                subtext: '',
                icon: '',
                localeName: 'pl'
            },
            {
                languageName: 'Portuguese (Brazil)',
                subtext: '',
                icon: '',
                localeName: 'pt-BR'
            },
            {
                languageName: 'Portuguese (Portugal)',
                subtext: '',
                icon: '',
                localeName: 'pt-PT'
            },
            {
                languageName: 'Punjabi',
                subtext: '',
                icon: '',
                localeName: 'pa'
            },
            {
                languageName: 'Romanian',
                subtext: '',
                icon: '',
                localeName: 'ro'
            },
            {
                languageName: 'Romany',
                subtext: '',
                icon: '',
                localeName: 'rom'
            },
            {
                languageName: 'Russian',
                subtext: '',
                icon: '',
                localeName: 'ru'
            },
            {
                languageName: 'Sanskrit',
                subtext: '',
                icon: '',
                localeName: 'sa'
            },
            {
                languageName: 'Seneca',
                subtext: '',
                icon: '',
                localeName: 'see'
            },
            {
                languageName: 'Serbian',
                subtext: '',
                icon: '',
                localeName: 'sr'
            },
            {
                languageName: 'Sinhala',
                subtext: '',
                icon: '',
                localeName: 'si'
            },
            {
                languageName: 'Slovak',
                subtext: '',
                icon: '',
                localeName: 'sk'
            },
            {
                languageName: 'Slovenian',
                subtext: '',
                icon: '',
                localeName: 'sl'
            },
            {
                languageName: 'Somali',
                subtext: '',
                icon: '',
                localeName: 'so'
            },
            {
                languageName: 'Southern Uzbek',
                subtext: '',
                icon: '',
                localeName: 'uzs'
            },
            {
                languageName: 'Spanish',
                subtext: '',
                icon: '',
                localeName: 'es'
            },
            {
                languageName: 'Sundanese',
                subtext: '',
                icon: '',
                localeName: 'su'
            },
            {
                languageName: 'Swahili',
                subtext: '',
                icon: '',
                localeName: 'sw'
            },
            {
                languageName: 'Swedish',
                subtext: '',
                icon: '',
                localeName: 'sv'
            },
            {
                languageName: 'Tajik',
                subtext: '',
                icon: '',
                localeName: 'tg'
            },
            {
                languageName: 'Tamil',
                subtext: '',
                icon: '',
                localeName: 'ta'
            },
            {
                languageName: 'Tatar',
                subtext: '',
                icon: '',
                localeName: 'tt'
            },
            {
                languageName: 'Telugu',
                subtext: '',
                icon: '',
                localeName: 'te'
            },
            {
                languageName: 'Thai',
                subtext: '',
                icon: '',
                localeName: 'th'
            },
            {
                languageName: 'Tigrinya',
                subtext: '',
                icon: '',
                localeName: 'ti'
            },
            {
                languageName: 'Turkish',
                subtext: '',
                icon: '',
                localeName: 'tr'
            },
            {
                languageName: 'Ukrainian',
                subtext: '',
                icon: '',
                localeName: 'uk'
            },
            {
                languageName: 'Urdu',
                subtext: '',
                icon: '',
                localeName: 'ur'
            },
            {
                languageName: 'Uyghur',
                subtext: '',
                icon: '',
                localeName: 'ug'
            },
            {
                languageName: 'Uzbek',
                subtext: '',
                icon: '',
                localeName: 'uz'
            },
            {
                languageName: 'Vietnamese',
                subtext: '',
                icon: '',
                localeName: 'vi'
            },
            {
                languageName: 'Welsh',
                subtext: '',
                icon: '',
                localeName: 'cy'
            },
            {
                languageName: 'Xhosa',
                subtext: '',
                icon: '',
                localeName: 'xh'
            },
            {
                languageName: 'Yiddish',
                subtext: '',
                icon: '',
                localeName: 'yi'
            },
            {
                languageName: 'Zulu',
                subtext: '',
                icon: '',
                localeName: 'zu'
            }
        ];
        this.selectedLanguage = this.languageOptions.find(function (x) { return x.localeName === 'en'; });
        this.currencyOptions = [
            {
                currencyValue: 'AED',
                currencyName: 'United Arab Emirates Dirham (AED)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'AFN',
                currencyName: 'Afghan Afghani (AFN)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'ALL',
                currencyName: 'Albanian Lek (ALL)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'AMD',
                currencyName: 'Armenian Dram (AMD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'ANG',
                currencyName: 'Netherlands Antillean Guilder (ANG)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'AOA',
                currencyName: 'Angolan Kwanza (AOA)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'ARS',
                currencyName: 'Argentine Peso (ARS)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'AUD',
                currencyName: 'Australian Dollar (A$)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'AWG',
                currencyName: 'Aruban Florin (AWG)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'AZN',
                currencyName: 'Azerbaijani Manat (AZN)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BAM',
                currencyName: 'Bosnia-Herzegovina Convertible Mark (BAM)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BBD',
                currencyName: 'Barbadian Dollar (BBD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BDT',
                currencyName: 'Bangladeshi Taka (BDT)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BGN',
                currencyName: 'Bulgarian Lev (BGN)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BHD',
                currencyName: 'Bahraini Dinar (BHD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BIF',
                currencyName: 'Burundian Franc (BIF)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BMD',
                currencyName: 'Bermudan Dollar (BMD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BND',
                currencyName: 'Brunei Dollar (BND)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BOB',
                currencyName: 'Bolivian Boliviano (BOB)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BRL',
                currencyName: 'Brazilian Real (R$)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BSD',
                currencyName: 'Bahamian Dollar (BSD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BTC',
                currencyName: 'Bitcoin (฿)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BTN',
                currencyName: 'Bhutanese Ngultrum (BTN)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BWP',
                currencyName: 'Botswanan Pula (BWP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BYN',
                currencyName: 'Belarusian Ruble (BYN)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BYR',
                currencyName: 'Belarusian Ruble (2000-2016) (BYR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'BZD',
                currencyName: 'Belize Dollar (BZD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'CAD',
                currencyName: 'Canadian Dollar (CA$)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'CDF',
                currencyName: 'Congolese Franc (CDF)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'CHF',
                currencyName: 'Swiss Franc (CHF)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'CLF',
                currencyName: 'Chilean Unit of Account (UF) (CLF)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'CLP',
                currencyName: 'Chilean Peso (CLP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'CNH',
                currencyName: 'CNH (CNH)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'CNY',
                currencyName: 'Chinese Yuan (CN¥)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'COP',
                currencyName: 'Colombian Peso (COP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'CRC',
                currencyName: 'Costa Rican Colón (CRC)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'CUP',
                currencyName: 'Cuban Peso (CUP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'CVE',
                currencyName: 'Cape Verdean Escudo (CVE)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'CZK',
                currencyName: 'Czech Republic Koruna (CZK)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'DEM',
                currencyName: 'German Mark (DEM)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'DJF',
                currencyName: 'Djiboutian Franc (DJF)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'DKK',
                currencyName: 'Danish Krone (DKK)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'DOP',
                currencyName: 'Dominican Peso (DOP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'DZD',
                currencyName: 'Algerian Dinar (DZD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'EGP',
                currencyName: 'Egyptian Pound (EGP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'ERN',
                currencyName: 'Eritrean Nakfa (ERN)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'ETB',
                currencyName: 'Ethiopian Birr (ETB)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'EUR',
                currencyName: 'Euro (€)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'FIM',
                currencyName: 'Finnish Markka (FIM)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'FJD',
                currencyName: 'Fijian Dollar (FJD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'FKP',
                currencyName: 'Falkland Islands Pound (FKP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'FRF',
                currencyName: 'French Franc (FRF)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'GBP',
                currencyName: 'British Pound (£)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'GEL',
                currencyName: 'Georgian Lari (GEL)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'GHS',
                currencyName: 'Ghanaian Cedi (GHS)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'GIP',
                currencyName: 'Gibraltar Pound (GIP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'GMD',
                currencyName: 'Gambian Dalasi (GMD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'GNF',
                currencyName: 'Guinean Franc (GNF)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'GTQ',
                currencyName: 'Guatemalan Quetzal (GTQ)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'GYD',
                currencyName: 'Guyanaese Dollar (GYD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'HKD',
                currencyName: 'Hong Kong Dollar (HK$)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'HNL',
                currencyName: 'Honduran Lempira (HNL)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'HRK',
                currencyName: 'Croatian Kuna (HRK)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'HTG',
                currencyName: 'Haitian Gourde (HTG)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'HUF',
                currencyName: 'Hungarian Forint (HUF)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'IDR',
                currencyName: 'Indonesian Rupiah (IDR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'IEP',
                currencyName: 'Irish Pound (IEP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'ILS',
                currencyName: 'Israeli New Sheqel (₪)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'INR',
                currencyName: 'Indian Rupee (₹)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'IQD',
                currencyName: 'Iraqi Dinar (IQD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'IRR',
                currencyName: 'Iranian Rial (IRR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'ISK',
                currencyName: 'Icelandic Króna (ISK)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'ITL',
                currencyName: 'Italian Lira (ITL)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'JMD',
                currencyName: 'Jamaican Dollar (JMD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'JOD',
                currencyName: 'Jordanian Dinar (JOD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'JPY',
                currencyName: 'Japanese Yen (¥)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'KES',
                currencyName: 'Kenyan Shilling (KES)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'KGS',
                currencyName: 'Kyrgystani Som (KGS)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'KHR',
                currencyName: 'Cambodian Riel (KHR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'KMF',
                currencyName: 'Comorian Franc (KMF)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'KPW',
                currencyName: 'North Korean Won (KPW)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'KRW',
                currencyName: 'South Korean Won (₩)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'KWD',
                currencyName: 'Kuwaiti Dinar (KWD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'KYD',
                currencyName: 'Cayman Islands Dollar (KYD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'KZT',
                currencyName: 'Kazakhstani Tenge (KZT)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'LAK',
                currencyName: 'Laotian Kip (LAK)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'LBP',
                currencyName: 'Lebanese Pound (LBP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'LKR',
                currencyName: 'Sri Lankan Rupee (LKR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'LRD',
                currencyName: 'Liberian Dollar (LRD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'LSL',
                currencyName: 'Lesotho Loti (LSL)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'LTL',
                currencyName: 'Lithuanian Litas (LTL)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'LVL',
                currencyName: 'Latvian Lats (LVL)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'LYD',
                currencyName: 'Libyan Dinar (LYD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MAD',
                currencyName: 'Moroccan Dirham (MAD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MDL',
                currencyName: 'Moldovan Leu (MDL)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MGA',
                currencyName: 'Malagasy Ariary (MGA)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MKD',
                currencyName: 'Macedonian Denar (MKD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MMK',
                currencyName: 'Myanmar Kyat (MMK)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MNT',
                currencyName: 'Mongolian Tugrik (MNT)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MOP',
                currencyName: 'Macanese Pataca (MOP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MRO',
                currencyName: 'Mauritanian Ouguiya (MRO)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MUR',
                currencyName: 'Mauritian Rupee (MUR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MVR',
                currencyName: 'Maldivian Rufiyaa (MVR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MWK',
                currencyName: 'Malawian Kwacha (MWK)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MXN',
                currencyName: 'Mexican Peso (MX$)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MYR',
                currencyName: 'Malaysian Ringgit (MYR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'MZN',
                currencyName: 'Mozambican Metical (MZN)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'NAD',
                currencyName: 'Namibian Dollar (NAD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'NGN',
                currencyName: 'Nigerian Naira (NGN)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'NIO',
                currencyName: 'Nicaraguan Córdoba (NIO)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'NOK',
                currencyName: 'Norwegian Krone (NOK)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'NPR',
                currencyName: 'Nepalese Rupee (NPR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'NZD',
                currencyName: 'New Zealand Dollar (NZ$)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'OMR',
                currencyName: 'Omani Rial (OMR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'PAB',
                currencyName: 'Panamanian Balboa (PAB)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'PEN',
                currencyName: 'Peruvian Nuevo Sol (PEN)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'PGK',
                currencyName: 'Papua New Guinean Kina (PGK)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'PHP',
                currencyName: 'Philippine Peso (PHP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'PKG',
                currencyName: 'PKG (PKG)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'PKR',
                currencyName: 'Pakistani Rupee (PKR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'PLN',
                currencyName: 'Polish Zloty (PLN)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'PYG',
                currencyName: 'Paraguayan Guarani (PYG)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'QAR',
                currencyName: 'Qatari Rial (QAR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'RON',
                currencyName: 'Romanian Leu (RON)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'RSD',
                currencyName: 'Serbian Dinar (RSD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'RUB',
                currencyName: 'Russian Ruble (RUB)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'RWF',
                currencyName: 'Rwandan Franc (RWF)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SAR',
                currencyName: 'Saudi Riyal (SAR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SBD',
                currencyName: 'Solomon Islands Dollar (SBD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SCR',
                currencyName: 'Seychellois Rupee (SCR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SDG',
                currencyName: 'Sudanese Pound (SDG)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SEK',
                currencyName: 'Swedish Krona (SEK)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SGD',
                currencyName: 'Singapore Dollar (SGD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SHP',
                currencyName: 'St. Helena Pound (SHP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SKK',
                currencyName: 'Slovak Koruna (SKK)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SLL',
                currencyName: 'Sierra Leonean Leone (SLL)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SOS',
                currencyName: 'Somali Shilling (SOS)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SRD',
                currencyName: 'Surinamese Dollar (SRD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'STD',
                currencyName: 'São Tomé &amp; Príncipe Dobra (STD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SVC',
                currencyName: 'Salvadoran Colón (SVC)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SYP',
                currencyName: 'Syrian Pound (SYP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'SZL',
                currencyName: 'Swazi Lilangeni (SZL)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'THB',
                currencyName: 'Thai Baht (THB)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'TJS',
                currencyName: 'Tajikistani Somoni (TJS)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'TMT',
                currencyName: 'Turkmenistani Manat (TMT)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'TND',
                currencyName: 'Tunisian Dinar (TND)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'TOP',
                currencyName: 'Tongan Paʻanga (TOP)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'TRY',
                currencyName: 'Turkish Lira (TRY)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'TTD',
                currencyName: 'Trinidad &amp; Tobago Dollar (TTD)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'TWD',
                currencyName: 'New Taiwan Dollar (NT$)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'TZS',
                currencyName: 'Tanzanian Shilling (TZS)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'UAH',
                currencyName: 'Ukrainian Hryvnia (UAH)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'UGX',
                currencyName: 'Ugandan Shilling (UGX)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'USD',
                currencyName: 'US Dollar ($)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'UYU',
                currencyName: 'Uruguayan Peso (UYU)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'UZS',
                currencyName: 'Uzbekistani Som (UZS)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'VEF',
                currencyName: 'Venezuelan Bolívar (VEF)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'VND',
                currencyName: 'Vietnamese Dong (₫)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'VUV',
                currencyName: 'Vanuatu Vatu (VUV)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'WST',
                currencyName: 'Samoan Tala (WST)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'XAF',
                currencyName: 'Central African CFA Franc (FCFA)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'XCD',
                currencyName: 'East Caribbean Dollar (EC$)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'XDR',
                currencyName: 'Special Drawing Rights (XDR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'XOF',
                currencyName: 'West African CFA Franc (CFA)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'XPF',
                currencyName: 'CFP Franc (CFPF)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'YER',
                currencyName: 'Yemeni Rial (YER)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'ZAR',
                currencyName: 'South African Rand (ZAR)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'ZMK',
                currencyName: 'Zambian Kwacha (1968–2012) (ZMK)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'ZMW',
                currencyName: 'Zambian Kwacha (ZMW)',
                subtext: "",
                icon: ""
            },
            {
                currencyValue: 'ZWL',
                currencyName: 'Zimbabwean Dollar (2009) (ZWL)',
                subtext: "",
                icon: ""
            }
        ];
        this.selectedCurrency = this.currencyOptions.find(function (x) { return x.currencyValue === 'USD'; });
    };
    /*updateSelectedLanguage(event: Object) {
        this.selectedLanguage = event;
        this.translateService.use(this.selectedLanguage);
        this.translateService.instant({
            key: this.selectedLanguage.localeName,
            words: ['Get', 'List', 'of', 'words', 'from', 'web', 'page']
        });
        //TODO: translate the page when language is changed. Call Google Translator API
    }

    updateSelectedCurrency(event: Object) {
        this.selectedCurrency = event;
        //TODO: Update the page with Currency value. This value should be bound globally.
    }*/
    FooterNavbarComponent.prototype.ngOnDestroy = function () {
    };
    FooterNavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-footer',
            templateUrl: 'footer.navbar.component.html',
            styleUrls: ['footer.navbar.component.css']
        })
    ], FooterNavbarComponent);
    return FooterNavbarComponent;
}());
exports.FooterNavbarComponent = FooterNavbarComponent;
/*
 this.languageOptions = [
 {
 name: "Bahasa Indonesia",
 subtext: "",
 icon: "",
 value: "id"
 },
 {
 name: "Bahasa Melayu",
 subtext: "",
 icon: "",
 value: "ms"
 },
 {
 name: "Català",
 subtext: "",
 icon: "",
 value: "ca"
 },
 {
 name: "Dansk",
 subtext: "",
 icon: "",
 value: "da"
 },
 {
 name: "Deutsch",
 subtext: "",
 icon: "",
 value: "de"
 },
 {
 name: "English",
 subtext: "",
 icon: "",
 value: "en"
 },
 {
 name: "Español",
 subtext: "",
 icon: "",
 value: "es"
 },
 {
 name: "Eλληνικά",
 subtext: "",
 icon: "",
 value: "el"
 },
 {
 name: "Français",
 subtext: "",
 icon: "",
 value: "fr"
 },
 {
 name: "Italiano",
 subtext: "",
 icon: "",
 value: "it"
 },
 {
 name: "Magyar",
 subtext: "",
 icon: "",
 value: "hu"
 },
 {
 name: "Nederlands",
 subtext: "",
 icon: "",
 value: "nl"
 },
 {
 name: "Norsk",
 subtext: "",
 icon: "",
 value: "no"
 },
 {
 name: "Polski",
 subtext: "",
 icon: "",
 value: "pl"
 },
 {
 name: "Português",
 subtext: "",
 icon: "",
 value: "pt"
 },
 {
 name: "Suomi",
 subtext: "",
 icon: "",
 value: "fi"
 },
 {
 name: "Svenska",
 subtext: "",
 icon: "",
 value: "sv"
 },
 {
 name: "Türkçe",
 subtext: "",
 icon: "",
 value: "tr"
 },
 {
 name: "Íslenska",
 subtext: "",
 icon: "",
 value: "is"
 },
 {
 name: "Čeština",
 subtext: "",
 icon: "",
 value: "cs"
 },
 {
 name: "Русский",
 subtext: "",
 icon: "",
 value: "ru"
 },
 {
 name: "ภาษาไทย",
 subtext: "",
 icon: "",
 value: "th"
 },
 {
 name: "中文 (简体)",
 subtext: "",
 icon: "",
 value: "zh"
 },
 {
 name: "中文 (繁體)",
 subtext: "",
 icon: "",
 value: "zh-TW"
 },
 {
 name: "日本語",
 subtext: "",
 icon: "",
 value: "ja"
 },
 {
 name: "한국어",
 subtext: "",
 icon: "",
 value: "ko"
 }
 ];*/
/*this.currencyOptions = [
 {
 name: "ARS",
 subtext: "",
 icon: "",
 value: "ARS"
 },
 {
 name: "AUD",
 subtext: "",
 icon: "",
 value: "AUD"
 },
 {
 name: "BGN",
 subtext: "",
 icon: "",
 value: "BGN"
 },
 {
 name: "BRL",
 subtext: "",
 icon: "",
 value: "BRL"
 },
 {
 name: "CAD",
 subtext: "",
 icon: "",
 value: "CAD"
 },
 {
 name: "CHF",
 subtext: "",
 icon: "",
 value: "CHF"
 },
 {
 name: "CLP",
 subtext: "",
 icon: "",
 value: "CLP"
 },
 {
 name: "CNY",
 subtext: "",
 icon: "",
 value: "CNY"
 },
 {
 name: "COP",
 subtext: "",
 icon: "",
 value: "COP"
 },
 {
 name: "CRC",
 subtext: "",
 icon: "",
 value: "CRC"
 },
 {
 name: "CZK",
 subtext: "",
 icon: "",
 value: "CZK"
 },
 {
 name: "DKK",
 subtext: "",
 icon: "",
 value: "DKK"
 },
 {
 name: "EUR",
 subtext: "",
 icon: "",
 value: "EUR"
 },
 {
 name: "GBP",
 subtext: "",
 icon: "",
 value: "GBP"
 },
 {
 name: "HKD",
 subtext: "",
 icon: "",
 value: "HKD"
 },
 {
 name: "HRK",
 subtext: "",
 icon: "",
 value: "HRK"
 },
 {
 name: "HUF",
 subtext: "",
 icon: "",
 value: "HUF"
 },
 {
 name: "IDR",
 subtext: "",
 icon: "",
 value: "IDR"
 },
 {
 name: "ILS",
 subtext: "",
 icon: "",
 value: "ILS"
 },
 {
 name: "INR",
 subtext: "",
 icon: "",
 value: "INR"
 },
 {
 name: "JPY",
 subtext: "",
 icon: "",
 value: "JPY"
 },
 {
 name: "KRW",
 subtext: "",
 icon: "",
 value: "KRW"
 },
 {
 name: "MAD",
 subtext: "",
 icon: "",
 value: "MAD"
 },
 {
 name: "MXN",
 subtext: "",
 icon: "",
 value: "MXN"
 },
 {
 name: "MYR",
 subtext: "",
 icon: "",
 value: "MYR"
 },
 {
 name: "NOK",
 subtext: "",
 icon: "",
 value: "NOK"
 },
 {
 name: "NZD",
 subtext: "",
 icon: "",
 value: "NZD"
 },
 {
 name: "PEN",
 subtext: "",
 icon: "",
 value: "PEN"
 },
 {
 name: "PHP",
 subtext: "",
 icon: "",
 value: "PHP"
 },
 {
 name: "PLN",
 subtext: "",
 icon: "",
 value: "PLN"
 },
 {
 name: "RON",
 subtext: "",
 icon: "",
 value: "RON"
 },
 {
 name: "RUB",
 subtext: "",
 icon: "",
 value: "RUB"
 },
 {
 name: "SAR",
 subtext: "",
 icon: "",
 value: "SAR"
 },
 {
 name: "SEK",
 subtext: "",
 icon: "",
 value: "SEK"
 },
 {
 name: "SGD",
 subtext: "",
 icon: "",
 value: "SGD"
 },
 {
 name: "THB",
 subtext: "",
 icon: "",
 value: "THB"
 },
 {
 name: "TRY",
 subtext: "",
 icon: "",
 value: "TRY"
 },
 {
 name: "TWD",
 subtext: "",
 icon: "",
 value: "TWD"
 },
 {
 name: "UAH",
 subtext: "",
 icon: "",
 value: "UAH"
 },
 {
 name: "USD",
 subtext: "",
 icon: "",
 value: "USD"
 },
 {
 name: "UYU",
 subtext: "",
 icon: "",
 value: "UYU"
 },
 {
 name: "VND",
 subtext: "",
 icon: "",
 value: "VND"
 },
 {
 name: "ZAR",
 subtext: "",
 icon: "",
 value: "ZAR"
 }
 ];
 */ 
