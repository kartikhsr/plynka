import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,AlertController,LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {TabsInfluencersPage} from '../tabs-influencers/tabs-influencers';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase'; 
import {AuthService} from '../../app/core/auth.service';
import { GooglePlus } from '@ionic-native/google-plus';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authenticationMedium:any;
  loginType:any;
  constructor(private googlePlus: GooglePlus,public loadingCtrl: LoadingController,public auth:AuthService, private alertCtrl:AlertController,private afAuth: AngularFireAuth ,public db:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  facebook(){
    this.loginType='Facebook';
    this.authenticationMedium=new firebase.auth.FacebookAuthProvider().addScope('user_friends');
    this.authentication(this.authenticationMedium);
  }
  google(){

  this.googlePlus.login({'scopes':'https://www.googleapis.com/auth/youtube','webClientId':'920154514957-nf6ljf58ql1ul2di9jmjm5ck4ob7ej7o.apps.googleusercontent.com','offline':true}).then((res)=>{console.log(res);alert(res.accessToken)}).catch(err=>{console.log(err);alert(err+"here"
)});
    // this.loginType='Google';
    // this.authenticationMedium=new firebase.auth.GoogleAuthProvider();
    // this.authentication(this.authenticationMedium);
  }
  authentication(authenticationMedium:any){  
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    
    this.afAuth.auth.signInWithRedirect(this.authenticationMedium).then((res)=>{ 
      console.log(res);
      firebase.database().ref('/users').child(res.user.uid).once('value', snapshot=> {
        if(snapshot.exists()){
          loading.dismiss();
          if(snapshot.val().choice=='influencer'){
            this.navCtrl.setRoot(TabsInfluencersPage);
          }else{
            this.navCtrl.setRoot(TabsPage);                  
          }
        }else{
          loading.dismiss();
          this.modalOpen(res);
        }
      });
    });
  } 
  modalOpen(res:any){
    let alert = this.alertCtrl.create({
      title: 'Successfully Authenticated',
      inputs: [
        {
          type:'radio',
          label:'Influencers',
          value:'influencer'
      },
      {
          type:'radio',
          label:'Brands',
          value:'brand'
      }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            firebase.database().ref('users/' +res.user.uid ).set({
              email: res.user.email,
              photoUrl:res.user.photoURL,
              choice:data,
              name:res.user.displayName,
              phoneNumber:res.user.phoneNumber,
              accessToken:res.credential.accessToken
            }); 
            firebase.database().ref('users/' +res.user.uid+'/profile/'+this.loginType ).set({
              accessToken: res.credential.accessToken,
              providerId:res.credential.providerId,
              uid:res.user.uid,
              id:res.additionalUserInfo.profile.id
            }); 
            if(data=='influencer'){
              this.navCtrl.setRoot(TabsInfluencersPage);
            }else{
              this.navCtrl.setRoot(TabsPage);                  
            }
            return ;
          }
        }
      ]
    });
    alert.present();
  }
  }

