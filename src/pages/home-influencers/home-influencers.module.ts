import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeInfluencersPage } from './home-influencers';

@NgModule({
  declarations: [
    HomeInfluencersPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeInfluencersPage),
  ],
})
export class HomeInfluencersPageModule {}
