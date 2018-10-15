import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAe3t1jKG0WYtMair-Yol56_qte9HGqQ9k',
      authDomain: 'girko12345.firebaseapp.com',
    });
  }
}
