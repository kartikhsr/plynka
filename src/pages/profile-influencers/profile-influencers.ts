import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileInfluencersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-influencers',
  templateUrl: 'profile-influencers.html',
})
export class ProfileInfluencersPage {
  item:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(navParams.get('item')){
      this.item=navParams.get('item');
    }else{
      this.item='';
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileInfluencersPage');
  }

}
