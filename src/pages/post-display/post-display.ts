import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PostAddPage} from '../post-add/post-add';
import * as $ from 'jquery';
@Component({
  selector: 'page-post-display',
  templateUrl: 'post-display.html'
})
export class PostDisplayPage {

  constructor(public navCtrl: NavController) {
    console.log(this.navCtrl.getActive());
    
  }
  PostDisp(){
    this.navCtrl.parent.select(3);
  }
}
