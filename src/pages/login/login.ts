import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
responseData : any;
	userData = {"username": "","password": "", "name": "","email": ""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login(){ this.navCtrl.push(TabsPage, {}, {animate: false}); }
signup(){  this.navCtrl.push(SignupPage); }
}
