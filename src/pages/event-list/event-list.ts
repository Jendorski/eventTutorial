import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventDetailPage } from '../event-detail/event-detail';
import { EventData } from '../../providers/event-data';

@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {
  public eventList: any;
currentEvent: any;
  constructor(public nav: NavController, public eventData: EventData, public navParams: NavParams) {
    this.nav = nav;
    this.eventData = eventData;
    this.eventData.getEventList().on('value', snapshot => {
  let rawList = [];
  snapshot.forEach( snap => {
    rawList.push({
      id: snap.key,
      name: snap.val().name,
      price: snap.val().price,
      date: snap.val().date
    });
  });
  this.eventList = rawList;
});
    this.eventData.getEventDetail(this.navParams.get('eventId'))
  .on('value', (snapshot) => {
    this.currentEvent = snapshot.val();
});
  }
goToEventDetail(eventId){
  this.nav.push(EventDetailPage, {
    eventId: eventId,
  });
}
}
