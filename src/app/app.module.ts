import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CountryCodeToNameInEngPipe } from '../pipes/country-code-to-name-in-eng/country-code-to-name-in-eng';
import { CountryCodeToNameInThaiPipe } from '../pipes/country-code-to-name-in-thai/country-code-to-name-in-thai';
import { CountryNameToFlagImageFilePipe } from '../pipes/country-name-to-flag-image-file/country-name-to-flag-image-file';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CountryCodeToNameInEngPipe,
    CountryCodeToNameInThaiPipe,
    CountryNameToFlagImageFilePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
