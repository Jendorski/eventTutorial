import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {
  currentEvent: any;
  constructor(public nav: NavController, public navParams: NavParams) {

    this.navParams = navParams;
  }
addGuest(guestName) {
  this.eventData.addGuest(guestName, this.currentEvent.id, this.currentEvent.price).then(() => {
    this.guestName = '';
  });
}
}
