import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
// import { DatePicker } from '@ionic-native/date-picker';
// import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
// import {INgxMyDpOptions} from 'ngx-mydatepicker';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { ImagePicker } from '@ionic-native/image-picker';

/**
 * Generated class for the PostAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-add',
  templateUrl: 'post-add.html',
})
export class PostAddPage {
  private myForm: FormGroup;
  medium:any[]=[];
  durationDays:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,public afAuth:AngularFireAuth,private imagePicker: ImagePicker) {
                
                this.afAuth.authState.subscribe(data=>{
                    console.log(data.uid);
                });
  }
  ngOnInit(){
    this.myForm = new FormGroup({
      'name': new FormControl(),
      'sector': new FormControl(),
      'startDate': new FormControl(),
      'endDate': new FormControl(),
      'totalBudget': new FormControl(),
      'medium':new FormArray([]),
      'duration': new FormControl(),
    });
  }
  setDuration(start:Date,end:Date){
    let startdate=new Date(start);
    let enddate=new Date(end);
    let diff:any;
    diff=Math.abs(startdate.getTime() - enddate.getTime());
    let diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 

    this.durationDays=diffDays;

  }
  createMedium(link:any):FormGroup{
    return new FormGroup({
      'minBudget': new FormControl(),
      'test1': new FormControl(),
      'minFollowers': new FormControl(),
      'maxFollowers': new FormControl(),
      'maxBudget': new FormControl(),
      'engagements': new FormControl(),
      'mediumType':new FormControl(link)
    });
  }
  addMedium(link:any,check:any):void{
    $("#"+check).toggleClass("select_social_icons");
    const controls = <FormArray>this.myForm.get('medium');
    controls.push(this.createMedium(link));
    console.log(this.myForm.get('medium'));
  }

  ionViewDidLoad() {
    // this.datePicker.show({
    //   date: new Date(),
    //   mode: 'date',
    //   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    // }).then(
    //   date => console.log('Got date: ', date),
    //   err => console.log('Error occurred while getting date: ', err)
    // );

  }
  ionViewDidLeave(){
    $("[aria-controls='tabpanel-t0-3']").attr('aria-selected','false');
  }
  uploadImg(){
    this.imagePicker.getPictures({}).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }
  submitCampaign(myForm: NgForm){
    this.afAuth.authState.subscribe(data=>{
        firebase.database().ref( ).child('brands/'+data.uid).push(myForm.value); 
    });
  } 
}
