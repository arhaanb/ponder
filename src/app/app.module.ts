import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { CameraPreview } from '@ionic-native/camera-preview';
import { Camera } from '@ionic-native/camera/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule} from '@angular/common/http';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import {ProgressBarModule} from "angular-progress-bar";
export const firebaseConfig = {
  apiKey: "AIzaSyB8P5X8TyRAdUm1bhUGz9I4XsG3kqSGluU",
  authDomain: "shrii-finals.firebaseapp.com",
  databaseURL: "https://shrii-finals.firebaseio.com",
  projectId: "shrii-finals",
  storageBucket: "shrii-finals.appspot.com",
  messagingSenderId: "707548890228",
  appId: "1:707548890228:web:8906b8f13414e494633d21",
  measurementId: "G-GN0FS0ECQ3"
};
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    ProgressBarModule
  
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],

  providers: [
    
    StreamingMedia,
    StatusBar,
    SplashScreen,
    CameraPreview,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler },
  
  ]
})

export class AppModule { }
