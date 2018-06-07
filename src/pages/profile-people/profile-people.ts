import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
// import {File} from '@ionic-native/file';
import {FileChooser} from '@ionic-native/file-chooser';
// import { HttpModule } from '@angular/http';
// import { HttpParams } from '@angular/common/http';

import { Http,  Headers, RequestOptions } from '@angular/http';
// import { ContentType } from '@angular/http/src/enums';
// import { NgCircleProgressModule } from 'ng-circle-progress';

@IonicPage()
@Component({
  selector: 'page-profile-people',
  templateUrl: 'profile-people.html',
})
export class ProfilePeoplePage {
  photo:any;
  view:any;
  provider=[];
  progress:any;
  name:any;
  domain3=[];
  check;
access:any;
  google:any=true;
  domains=[];
  facebook:any=true;
  instagram:any=true;
  @ViewChild('name1') username1;
  @ViewChild('email1') email1;
  @ViewChild('domain1') domain1;
  email:any;
  authenticationMedium:any;
  loginType:any;
  uid:any;
  accessTokenUser:any;
  constructor(private loadingCtrl:LoadingController,private fileChooser:FileChooser,private http: Http,private afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    // console.log(this.auth.getUid);
    // console.log(this.auth.getUid.);
    // this.http.get('https://graph.facebook.com/v3.0/me?access_token=EAACcFXjqiawBAPb0WMyrqwNM2DbOeZCOIgiTM67HON7oMsf8nNVvxRDHghmqmZCAcEVg70zWcYDGJBPIgMsEUEMZBoRgHxjLpoZAdecsesZB4jC90anWxAkPXVRIUA00KZAy4b4Oe3vEr2JmShKaYgZBKZCI44nl6SvFHKmxCTvY1gZDZD&fields=friends').map(data => {
    //   console.log("Facebook friends",data.json());
    // }).subscribe((data)=>{console.log(data);});
    // https://www.googleapis.com/plus/v1/people/104981615285846024448?key=AIzaSyAqlZ1MJSGXMSs8q5WbfvLpZTGJeHLVc2w
    this.progress=0;
    // this.http.get('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=819yt38vsq3iyd&redirect_uri=http://localhost:8100/&state=987654321&scope=r_basicprofile',this.setHeaders()).map(data => {
    //   console.log("Facebook friends",data);  
    // console.log("Facebook friends");
    // }).subscribe((data)=>{console.log(data);});
    // let params = new HttpParams();
// params = params.append('client_id', "89268b6f59a24475a09f0cab8be7ce27");
// params = params.append('redirect_uri', "http://localhost:8100/");
// params = params.append('response_type', "code");
    // this.http.get('https://www.instagram.com/oauth/authorize/?client_id=89268b6f59a24475a09f0cab8be7ce27&redirect_uri=http://localhost:8100/&response_type=token').subscribe((data)=>{console.log(data.url);window.location.href=data.url;});
   
    this.view=false;
    this.authenticateProviders();
  }
  authenticateProviders(){
    this.check=this.afAuth.authState.subscribe(data=>{
      this.uid=data.uid;
      firebase.database().ref('/users').child(data.uid).once('value', snapshot=> {
        this.check.unsubscribe();
        if(snapshot.exists()){
          this.progress=0;
          this.provider=(Object.keys(snapshot.val().profile));
          this.provider.forEach(element => {
            if(element=='Facebook'){
              this.facebook=false;
              this.progress=this.progress+33;
            }
            if(element=='Google'){
              this.google=false;
              console.log("here google");
              this.progress=this.progress+33;
            }
            if(element=='Instagram'){
              this.instagram=false;
              console.log("here instagram");
              this.progress=this.progress+33;
            }
          });
          this.domain3=snapshot.val().domain;
          this.photo=snapshot.val().photoUrl;
          this.view=true;
          this.accessTokenUser=snapshot.val().accessToken;
          this.name=snapshot.val().name;
          this.email=snapshot.val().email;
        }else{
          console.log("data empty");
          return;
        }
      });
    });
  }
  authenticatewithGoogleMethod(){
    this.loginType='Google';
    this.authenticationMedium=new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(this.authenticationMedium).then((res)=>{ 
      this.signin();
      firebase.database().ref('users/' +this.uid+'/profile/'+this.loginType ).set({
        accessToken: res.credential.accessToken,
        providerId:res.credential.providerId,
        uid:res.user.uid,
        id:res.additionalUserInfo.profile.id
      });
    });
  }
  authenticatewithInstagramMethod(){
    let _this=this;
    let checking:string;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let newWindow = open('https://www.instagram.com/oauth/authorize/?client_id=89268b6f59a24475a09f0cab8be7ce27&redirect_uri=http://localhost:8100/&response_type=token', 'example', 'width=300,height=300')
    newWindow.onload = function() {
      checking=this.window.location.href;
      _this.access=checking.slice(36,checking.length);
      _this.http.get('https://api.instagram.com/v1/users/self/?access_token='+_this.access).map((data)=>{return data.json();}).subscribe((data)=>{
        firebase.database().ref('users/' +_this.uid+'/profile/'+'Instagram' ).set({
          accessToken: _this.access,
          providerId:'instagram.com'
      });  
      _this.authenticateProviders();
        console.log(data.data.counts.follows);
      });
      newWindow.close();
      loading.dismiss();
    };
  }
  signin(){
    let token=firebase.auth.FacebookAuthProvider.credential(this.accessTokenUser);
    this.afAuth.auth.signInWithCredential(token).then((res)=>{
      this.authenticateProviders();
    });
    return;
  }
  setHeaders(){
    let headers,options;
    headers = new Headers({'Accept':'code'});
    options = new RequestOptions({headers : headers});
    return options;
  }
  upload(){
    this.fileChooser.open().then((uri)=>{
      console.log(uri);
    }).catch((e)=>{console.log(e);});
    
  }
  ionViewDidLoad() {
    // console.log(this.auth.getUid);
    firebase.database().ref('/domain').on('value', snapshot=> {
      if(snapshot.exists()){
        this.domains=snapshot.val();
        // console.log(this.domains);
      }else{
          // this.modalOpen(res);
      }
    });
  }
  save(){
    firebase.database().ref('users/KxV4hmhUNbeGuhPS6js6g19InWc2' ).update({
      email: this.email1._value,
      domain:this.domain1._value,
      name:this.username1._value
    }); 
    this.authenticateProviders();

    
    // console.log(this.email1._value);
  }
}
