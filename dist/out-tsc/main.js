import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
    .then(function (success) { return console.log('App bootstrapped'); })
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=/Users/rakeshchouhan/WebstormProjects/mockii_node/src/main.js.map