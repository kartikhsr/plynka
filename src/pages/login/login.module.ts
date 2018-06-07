import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
// import { HomeInfluencersPage } from '../home-influencers/home-influencers';
// import {TabsInfluencersPage} from '../tabs-influencers/tabs-influencers';
import {LoginPage} from './login';
import { GooglePlus } from '@ionic-native/google-plus';

@NgModule({
  declarations: [
    // HomeInfluencersPage,
    // TabsInfluencersPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    // HomeInfluencersPage,
    // TabsInfluencersPage
  ],
  entryComponents:[
    // HomeInfluencersPage,
    // TabsInfluencersPage
  ],
  providers:[
    AngularFireAuth,
    GooglePlus
  ]
})
export class LoginPageModule {}
