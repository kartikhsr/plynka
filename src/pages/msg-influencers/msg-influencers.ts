import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CompInfluencersPage} from '../comp-influencers/comp-influencers';
/**
 * Generated class for the MsgInfluencersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-msg-influencers',
  templateUrl: 'msg-influencers.html',
})
export class MsgInfluencersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsgInfluencersPage');
  }
  company(){
    this.navCtrl.push(CompInfluencersPage);
  }

}
