import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/Rx'
import { InAppPurchase } from '@ionic-native/in-app-purchase';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProductsPage } from '../pages/products/products';
import { HistoryPage } from '../pages/history/history';
import { BalancePage } from '../pages/balance/balance';
import { DepositPage } from '../pages/deposit/deposit';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    DashboardPage,
    ProductsPage,
    HistoryPage,
    BalancePage,
    DepositPage
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    DashboardPage,
    ProductsPage,
    HistoryPage,
    BalancePage,
    DepositPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppPurchase
  ]
})
export class AppModule {}
