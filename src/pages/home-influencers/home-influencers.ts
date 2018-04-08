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
a:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 this.a="a";
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeInfluencersPage');
  }
  flip(a:any) {
    // console.log($(this).find('div:first-child').css('color','red'));
    console.log(a);
  //  $(this).parent().closest('div').toggleClass('flipped');
  // console.log($(this).attr('id'));
  // let hel=$('this').add('div:first-child').attr('id');
  $('.card').toggleClass('flipped');
    // alert(JSON.stringify(hel));
  }
  tog(){
   
    $('.tog').css('display','none');
    $('.hide').removeClass('hide');
  }
}
