import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { PostDisplayPage } from '../post-display/post-display';

import { NotificationPage } from '../notification/notification';
import { ProfilePage } from '../profile/profile';

import { PostAddPage } from '../post-add/post-add';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PostDisplayPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root= PostAddPage;
  tab5Root= ProfilePage;
  constructor() {

  }
}
