import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController} from 'ionic-angular';
import {LoginPage} from '../login/login';

/**
 * Generated class for the PopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pop-over',
  templateUrl: 'pop-over.html',
})
export class PopOverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app:App, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverPage');
  }
  close(){
    this.viewCtrl.dismiss();
    
    this.app.getRootNav().setRoot(LoginPage);
  }
}
