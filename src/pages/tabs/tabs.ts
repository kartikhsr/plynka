import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SearchPage } from '../search/search';
import { PostDisplayPage } from '../post-display/post-display';

import { NotificationPage } from '../notification/notification';
import { ProfilePage } from '../profile/profile';

import { InfluencersPage } from '../influencers/influencers';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PostDisplayPage;
  tab2Root = AboutPage;
  tab3Root = SearchPage;
  tab4Root= InfluencersPage;
  tab5Root= ProfilePage;
  constructor() {

  }
}
