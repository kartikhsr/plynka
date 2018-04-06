import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {TabsInfluencersPage} from '../tabs-influencers/tabs-influencers';
import {AngularFireAuth} from 'angularfire2/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  facebook(){
    // this.afAuth.auth.createUserWithEmailAndPassword('kartikhsr85@gmail.com','@Yattin2005');
    this.navCtrl.setRoot(TabsInfluencersPage);
  }
  google(){
    this.navCtrl.push(TabsPage);
  }
}
