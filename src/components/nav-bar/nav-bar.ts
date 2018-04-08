import { Component } from '@angular/core';
import { PopoverController,NavController } from 'ionic-angular';
import {PopOverPage} from '../../pages/pop-over/pop-over';
import {MsgInfluencersPage} from '../../pages/msg-influencers/msg-influencers';

/**
 * Generated class for the NavBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.html'
})
export class NavBarComponent {

  constructor(public popoverCtrl: PopoverController, public navCtrl:NavController) {
    console.log('Hello NavBarComponent Component');

  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopOverPage);
    popover.present({
      ev: myEvent
    });
  }
  msg(){
    console.log('he');
     this.navCtrl.push(MsgInfluencersPage);
   }
 
}
