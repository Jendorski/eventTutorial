import { NavController, Alert } from 'ionic-angular';
import { Component } from '@angular/core';
import { ProfileData } from '../../providers/profile-data';
import { AuthData } from '../../providers/auth-data';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userProfile: any;
  public birthDate: string;
  public alertCtrl: any;
  constructor(public nav: NavController, public profileData: ProfileData,
    public authData: AuthData, public alerts: Alert) {
    this.nav = nav;
    this.profileData = profileData;

    this.profileData.getUserProfile().on('value', (data) => {
      this.userProfile = data.val();
      this.birthDate = this.userProfile.birthDate;
    });

  }

updateName(){
  let alert = this.alertCtrl.create({
    message: "Your first name & last name",
    inputs: [
      {
        name: 'firstName',
        placeholder: 'Your first name',
        value: this.userProfile.firstName
      },
      {
        name: 'lastName',
        placeholder: 'Your last name',
        value: this.userProfile.lastName
      },
    ],
    buttons: [
      {
        text: 'Cancel',
      },
      {
        text: 'Save',
        handler: data => {
          this.profileData.updateName(data.firstName, data.lastName);
        }
      }
    ]
  });
  alert.present();
}

}
