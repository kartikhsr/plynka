import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { PostDisplayPage } from '../pages/post-display/post-display';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { NotificationPage } from '../pages/notification/notification';
import { PostAddPage } from '../pages/post-add/post-add';
import { PopOverPage} from '../pages/pop-over/pop-over';
import { InfluencersPage } from '../pages/influencers/influencers';
import { SearchPage} from '../pages/search/search';
import { ProfilePeoplePage } from '../pages/profile-people/profile-people';

import { TabsInfluencersPage } from '../pages/tabs-influencers/tabs-influencers';
import { FilterInfluencersPage } from '../pages/filter-influencers/filter-influencers';
import { HomeInfluencersPage } from '../pages/home-influencers/home-influencers';
import { NotificationInfluencersPage } from '../pages/notification-influencers/notification-influencers';
import { ProfileInfluencersPage } from '../pages/profile-influencers/profile-influencers';
import { SearchInfluencersPage } from '../pages/search-influencers/search-influencers';
import {MsgInfluencersPage} from '../pages/msg-influencers/msg-influencers';
import {CompInfluencersPage} from '../pages/comp-influencers/comp-influencers';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AngularFireAuth} from 'angularfire2/auth';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FIREBASE_CONFIG} from './app.firebase.config';
@NgModule({
  declarations: [
    MyApp,
    NavBarComponent,
    AboutPage,
    ContactPage,
    PostDisplayPage,
    PostAddPage,
    PopOverPage,
    SearchPage,
    MsgInfluencersPage,
    CompInfluencersPage,
    TabsInfluencersPage,
    InfluencersPage,
    FilterInfluencersPage,
    HomeInfluencersPage,
    NotificationInfluencersPage,
    ProfileInfluencersPage,
    ProfilePeoplePage,
    SearchInfluencersPage,
    TabsPage,NotificationPage,LoginPage,ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NavBarComponent,
    SearchPage,
    MsgInfluencersPage,
    PopOverPage,
    InfluencersPage,
    CompInfluencersPage,
    AboutPage,
    ProfilePeoplePage,
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
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
