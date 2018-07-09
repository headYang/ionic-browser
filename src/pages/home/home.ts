import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private themable: ThemeableBrowser) {

  }

  openBrowser() {
    const options: ThemeableBrowserOptions = {
      toolbar: {
        height: 44,
        color: '#3573bbff'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: true,
        staticText: 'Dmd browser'
      },
      backButton: {
        wwwImage: 'assets/imgs/back.png',
        align: 'left',
        event: 'backPressed'
      },
      forwardButton: {
        wwwImage: 'assets/imgs/forward.png',
        align: 'right',
        event: 'forwardPressed'
      },
      closeButton: {
        wwwImage: 'assets/imgs/close.png',
        align: 'left',
        event: 'closePressed'
      },
    }
    const browser: ThemeableBrowserObject = this.themable.create('https://ionicacademy.com', '_blank', options);
    browser.on('closePressed').subscribe(res => {
      browser.close();
    });
  }
}
