import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostAddPage } from './post-add';

@NgModule({
  declarations: [
    PostAddPage,
  ],
  imports: [
    IonicPageModule.forChild(PostAddPage),
  ],
})
export class PostAddPageModule {}
