import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {MsgInfluencersPage} from '../msg-influencers/msg-influencers';
/**
 * Generated class for the SearchInfluencersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-influencers',
  templateUrl: 'search-influencers.html',
})
export class SearchInfluencersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchInfluencersPage');
  }
  msg(){
   console.log('here');
    // this.navCtrl.push(MsgInfluencersPage);
  }

}
