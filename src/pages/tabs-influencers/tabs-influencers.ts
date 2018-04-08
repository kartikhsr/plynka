import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeInfluencersPage } from '../home-influencers/home-influencers';
import { SearchInfluencersPage } from '../search-influencers/search-influencers';
import { PostDisplayPage } from '../post-display/post-display';

import { NotificationInfluencersPage } from '../notification-influencers/notification-influencers';
import { ProfileInfluencersPage } from '../profile-influencers/profile-influencers';

import { ProfilePeoplePage } from '../profile-people/profile-people';
import { FilterInfluencersPage } from '../filter-influencers/filter-influencers';
/**
 * Generated class for the TabsInfluencersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-influencers',
  templateUrl: 'tabs-influencers.html',
})
export class TabsInfluencersPage {
  tab1Root = HomeInfluencersPage;
  tab2Root = NotificationInfluencersPage;
  tab3Root = SearchInfluencersPage;
  tab4Root= FilterInfluencersPage;
  tab5Root= ProfilePeoplePage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsInfluencersPage');
  }

}
