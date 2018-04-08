import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfileInfluencersPage} from '../profile-influencers/profile-influencers';
/**
 * Generated class for the InfluencersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-influencers',
  templateUrl: 'influencers.html',
})
export class InfluencersPage {
items: Array<{name: string,bio:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.items=[{name:'Rehman',bio:'I am looking for brands '},{name:'Irshad',bio:'I am looking for brands '},{name:'Salim',bio:'I am looking for brands '}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfluencersPage');
  }
  pro(item:any){
    this.navCtrl.push(ProfileInfluencersPage,{item:item});
  }

}
