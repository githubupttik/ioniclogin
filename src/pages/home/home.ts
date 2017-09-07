import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

userDetails : any;
responseData: any;
dataSet : any;
userPostData = {"user_id":"","token":""};

  constructor(public navCtrl: NavController, public app: App, public authService:AuthServiceProvider) {
  
  const data = JSON.parse(localStorage.getItem('userData'));
  this.userDetails = data.userData;

  this.userPostData.user_id = this.userDetails.user_id;
  this.userPostData.token = this.userDetails.token;
  this.getFeed();

  }
  
  getFeed() {
    this.authService.postData(this.userPostData, 'feed')
      .then((result) => {
        this.responseData = result;
        if (this.responseData.feedData) {
          this.dataSet = this.responseData.feedData;
        } else {}
      }, (err) => {

      });
  }

  convertTime(created) {
    let date = new Date(created * 1000);
    return date;
  }
  
  backToWelcome(){
   const root = this.app.getRootNav();
   root.popToRoot();
}

  logout(){  const root = this.app.getRootNav();  root.popToRoot();
  }

}
