import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
/**
 * Generated class for the HomeInfluencersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-influencers',
  templateUrl: 'home-influencers.html',
})
export class HomeInfluencersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeInfluencersPage');
  }
  flip() {
    
    $('.card').toggleClass('flipped');
  }
  tog(){
   
    $('.tog').css('display','none');
    $('.hide').removeClass('hide');
  }
}
