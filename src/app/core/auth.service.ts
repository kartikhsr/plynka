import {Injectable} from '@angular/core';
// import * as firebase from 'firebase';
// import { IonicPage } from 'ionic-angular';

// import {AngularFireAuth} from 'angularfire2/auth';
// import {AngularFireDatabase} from 'angularfire2/database';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';

// interface User{
//     name:String,
//     email:String,
//     photoUrl:String,
//     choice:String
// }
// let domain={value:"hello"};

// let uid:any;

@Injectable()
export class AuthService{
    constructor(){
        // this.afAuth.authState.subscribe(data=>{
        //     console.log(data);
        //     uid=data.uid;
        //     // this.user=data;
        //     // this.User.uid=data.uid;
        //     console.log("Auth Service");
        // });
    }
    // getUid() {
    //     firebase.database().ref('/domain').on('value', snapshot=> {
    //         if(snapshot.exists()){
    //             // console.log(snapshot.val());
    //             console.log("Auth");
    //             domain=snapshot.val();

    //         //   this.domains=snapshot.val();
    //         }else{
    //             // this.modalOpen(res);
    //         }
    //       });
    //     // console.log(domain);
    // }
}