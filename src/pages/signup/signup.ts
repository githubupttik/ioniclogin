import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	responseData : any;
	userData = {"username": "","password": "", "name": "","email": "", "re-password": ""};


  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthServiceProvider, public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

signup(){
    if(this.userData.username && this.userData.password && this.userData.email && this.userData.name && this.userData.re-password){
      //Api connections
    this.authService.postData(this.userData, "signup").then((result) =>{
    this.responseData = result;
    console.log(this.responseData);
    localStorage.setItem('userData', JSON.stringify(this.responseData) ) 
    this.navCtrl.push(TabsPage);
    }, (err) => {
      //Connection failed message
    });
  }
  else {
    this.presentToast("Give valid information.");
  }
  }
  
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  login(){
    //Login page link
    this.navCtrl.push(LoginPage);
  }

}
