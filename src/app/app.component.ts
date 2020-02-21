import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {timer} from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('content') nav: NavController;
  rootPage: any = "LoginPage";
  showSplash = true;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
  ) {
    this.declarePages();
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false)
    });
  }
  public pages: { title: string, name: string }[]

  declarePages() {
    this.pages = [
      { title: 'Home', name: "HomePage" },
      { title: 'Notes', name: "LoggerPage" },
      {title:'Pintrest', name: "PintrestPage"},
      {title: 'Music', name:'MusicPage'},
      {title:'Patent',name:'PatentPage'},
      { title: 'Logout', name: null },
    ];
  }
  public openPage(page: string) {
    if (page) {
      this.nav.setRoot(page);
    } else {
      this.nav.setRoot(this.rootPage);
    }
  }

}

