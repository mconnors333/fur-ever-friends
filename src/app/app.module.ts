import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { LoginPageModule } from '../pages/login/login.module';

import { MessagesPage } from '../pages/messages/messages';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsPage } from '../pages/details/details';
// import { LoginPage } from '../pages/login/login'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DogPicsProvider } from '../providers/dog-pics/dog-pics';
import { ProfilePage } from '../pages/profile/profile';
import { FirebaseProvider } from '../providers/firebase/firebase';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'



var firebaseConfig = {
  apiKey: "AIzaSyB2JAZKiejVEMmzGPMlSinz_6kUruILpp4",
  authDomain: "fur-ever-friends.firebaseapp.com",
  databaseURL: "https://fur-ever-friends.firebaseio.com",
  projectId: "fur-ever-friends",
  storageBucket: "",
  messagingSenderId: "717687056233"
};


@NgModule({
  declarations: [
    MyApp,
    MessagesPage,
    SettingsPage,
    HomePage,
    TabsPage,
    DetailsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule, 
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MessagesPage,
    SettingsPage,
    HomePage,
    TabsPage,
    DetailsPage,
    // LoginPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DogPicsProvider,
    FirebaseProvider
  ]
})
export class AppModule {}
