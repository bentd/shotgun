// Angular
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ShotgvnApp } from './app.component';

// Ionic
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
    declarations: 
    [
        ShotgvnApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
  
    imports:
    [
        BrowserModule,
        IonicModule.forRoot(ShotgvnApp)
    ],
    
    bootstrap: [IonicApp],
    
    entryComponents:
    [
        ShotgvnApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    
    providers: 
    [
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler, 
            useClass: IonicErrorHandler
        }
    ]
})
export class AppModule {}
