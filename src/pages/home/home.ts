import { Component } from '@angular/core';
import { EventCreatePage } from '../event-create/event-create';
import { EventListPage } from '../event-list/event-list';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
goToCreate(){
  this.navCtrl.push(EventCreatePage);
}

goToList(){
  this.navCtrl.push(EventListPage);
}
  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }
}
