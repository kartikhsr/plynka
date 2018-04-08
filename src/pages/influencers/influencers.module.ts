import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfluencersPage } from './influencers';

@NgModule({
  declarations: [
    InfluencersPage,
  ],
  imports: [
    IonicPageModule.forChild(InfluencersPage),
  ],
})
export class InfluencersPageModule {}
