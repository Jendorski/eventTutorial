import { Component } from '@angular/core';
import { 
  NavController, 
  LoadingController, 
  AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { ResetPasswordPage } from '../reset-password/reset-password';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
   public loginForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;
  
  constructor(public nav: NavController, public authData: AuthData, 
    public formBuilder: FormBuilder,public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController) {

      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });

    }
loginUser(){
  this.submitAttempt = true;

  if (!this.loginForm.valid){
    console.log(this.loginForm.value);
  } else {
    this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then( authData => {
    this.nav.setRoot(HomePage);
  }, error => {
    this.loading.dismiss().then( () => {
      let alert = this.alertCtrl.create({
        message: error.message,
        buttons: [
          {
            text: "Ok",
            role: 'cancel'
          }
        ]
      });
      alert.present();
    });
  });

  this.loading = this.loadingCtrl.create({
    dismissOnPageChange: true,
  });
  this.loading.present();
  }
}

goToSignup(){
  this.nav.push(SignupPage);
}

goToResetPassword(){
  this.nav.push(ResetPasswordPage);
}

	
	}
