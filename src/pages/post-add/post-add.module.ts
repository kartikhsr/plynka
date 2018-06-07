import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostAddPage } from './post-add';
import {ReactiveFormsModule} from '@angular/forms'
// import { DatePicker } from '@ionic-native/date-picker';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

@NgModule({
  declarations: [
    // PostAddPage,
  ],
  imports: [
    IonicPageModule.forChild(PostAddPage),
    ReactiveFormsModule,
    NgxMyDatePickerModule,
    // DatePicker
  ],
  providers:[
    // DatePicker
  ]
})
export class PostAddPageModule {}
