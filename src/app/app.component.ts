import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LoginPage;

  constructor(platform: Platform) {
  firebase.initializeApp({
  apiKey: "AIzaSyDStRcYvfCWZsFSe7p-KvqqAGKii4HqYE4",
  authDomain: "wowa-3d008.firebaseapp.com",
  databaseURL: "https://wowa-3d008.firebaseio.com",
  storageBucket: "wowa-3d008.appspot.com",
  messagingSenderId: "881290186245"
});

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    this.rootPage = LoginPage;
  }
});

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
