import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { PostDisplayPage } from '../pages/post-display/post-display';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { NotificationPage } from '../pages/notification/notification';
import { PostAddPage } from '../pages/post-add/post-add';

import { TabsInfluencersPage } from '../pages/tabs-influencers/tabs-influencers';
import { FilterInfluencersPage } from '../pages/filter-influencers/filter-influencers';
import { HomeInfluencersPage } from '../pages/home-influencers/home-influencers';
import { NotificationInfluencersPage } from '../pages/notification-influencers/notification-influencers';
import { ProfileInfluencersPage } from '../pages/profile-influencers/profile-influencers';
import { SearchInfluencersPage } from '../pages/search-influencers/search-influencers';
import {MsgInfluencersPage} from '../pages/msg-influencers/msg-influencers';
import {CompInfluencersPage} from '../pages/comp-influencers/comp-influencers';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    PostDisplayPage,
    PostAddPage,
    MsgInfluencersPage,
    CompInfluencersPage,
    TabsInfluencersPage,
    FilterInfluencersPage,
    HomeInfluencersPage,
    NotificationInfluencersPage,
    ProfileInfluencersPage,
    SearchInfluencersPage,
    TabsPage,NotificationPage,LoginPage,ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MsgInfluencersPage,
    CompInfluencersPage,
    AboutPage,
    TabsInfluencersPage,
    ContactPage,
    PostDisplayPage,
    PostAddPage,
    TabsInfluencersPage,
    FilterInfluencersPage,
    HomeInfluencersPage,
    NotificationInfluencersPage,
    ProfileInfluencersPage,
    SearchInfluencersPage,
    TabsPage,NotificationPage,LoginPage,ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
