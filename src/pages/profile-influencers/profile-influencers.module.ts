import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileInfluencersPage } from './profile-influencers';

@NgModule({
  declarations: [
    ProfileInfluencersPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileInfluencersPage),
  ],
})
export class ProfileInfluencersPageModule {}
