import { Component } from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private platform: Platform) {}

  ionViewDidEnter() {
    console.log(this.platform.platforms());
    (window as any).gtag('event', 'my_custom_event', {
      platform: this.platform.platforms()
    })
  }

}
