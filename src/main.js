"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app/app.module');
//enableProdMode(); //Uncomment for production
document.addEventListener('WebComponentsReady', function () {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
        .then(function (success) { return console.log('App bootstrapped'); })
        .catch(function (err) { return console.error(err); });
});
/*
var webComponentsFlag = false;
document.addEventListener('WebComponentsReady',() =>{
    if (!webComponentsFlag)
        platformBrowserDynamic().bootstrapModule(AppModule);
    webComponentsFlag = true;
});
if (webComponentsFlag)
    platformBrowserDynamic().bootstrapModule(AppModule);*/
