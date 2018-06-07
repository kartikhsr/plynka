import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar';
import {File} from '@ionic-native/file';
import {FileChooser} from '@ionic-native/file-chooser';
import { HttpModule } from '@angular/http';
// import { HttpClient, HttpErrorResponse} from '@angular/common/http';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DatePicker } from '@ionic-native/date-picker';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { ImagePicker } from '@ionic-native/image-picker';
import { GooglePlus } from '@ionic-native/google-plus';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { PostDisplayPage } from '../pages/post-display/post-display';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
// import { NotificationPage } from '../pages/notification/notification';
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
// import {CompInfluencersPage} from '../pages/comp-influencers/comp-influencers';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {AuthService} from '../app/core/auth.service';


const firebaseconfig={
  apiKey: "AIzaSyCAse5hg9lV2tmM_CTE4K5rhYxh8lN5Fbo",
  authDomain: "plynka-2230b.firebaseapp.com",
  databaseURL: "https://plynka-2230b.firebaseio.com",
  projectId: "plynka-2230b",
  storageBucket: "plynka-2230b.appspot.com",
  messagingSenderId: "920154514957"
};
@NgModule({
  declarations: [
    MyApp,
    NavBarComponent,
    AboutPage,
    ContactPage,
    PostDisplayPage,
    PopOverPage,
    PostAddPage,
    SearchPage,
    MsgInfluencersPage,
    TabsInfluencersPage,
    InfluencersPage,
    FilterInfluencersPage,
    HomeInfluencersPage,
    NotificationInfluencersPage,
    ProfileInfluencersPage,
    ProfilePeoplePage,
    SearchInfluencersPage,
    TabsPage,
    LoginPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    AngularDateTimePickerModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule ,
    HttpModule ,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 70,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NavBarComponent,
    SearchPage,
    MsgInfluencersPage,
    PopOverPage,
    InfluencersPage,
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
    TabsPage,
    LoginPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    FileChooser,
    File,
    DatePicker, 
    ImagePicker,
    GooglePlus,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
