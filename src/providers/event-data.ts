import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the EventData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EventData {
  public currentUser: any;
  public eventList: any;

  constructor(public http: Http) {
        this.currentUser = firebase.auth().currentUser.uid;
    this.eventList = firebase.database().ref('userProfile/' + this.currentUser + '/eventList');

    console.log('Hello EventData Provider');
  }

createEvent(eventName: string, eventDate: string, 
  eventPrice: number, eventCost: number): any {
  return this.eventList.push({
    name: eventName,
    date: eventDate,
    price: eventPrice,
    cost: eventCost,
    revenue: eventCost * -1
  }).then( newEvent => {
    this.eventList.child(newEvent.key).child('id').set(newEvent.key);
  });
}

getEventList(): any {
  return this.eventList;
}

addGuest(guestName, eventId, eventPrice): any {
  return this.eventList.child(eventId).child('guestList').push({
    guestName: guestName
  });
}

getEventDetail(eventId): any {
  return this.eventList.child(eventId);
}

}
