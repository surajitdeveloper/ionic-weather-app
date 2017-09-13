import { NgModule, ErrorHandler, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {  HttpModule } from "@angular/http"
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ViewPage } from "../pages/view/view";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ViewPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCC_Tteoi5wcQ8MZaWWOPIifHuc1yGllsw'
    })
  ],
  bootstrap: [IonicApp, MyApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation

  ]
})
export class AppModule {}
