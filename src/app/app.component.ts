import { Component } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDISYHXq-3k_kInVItsIl0qM6H3a4HQogs",
      authDomain: "masuperagence-6539a.firebaseapp.com",
      databaseURL: "https://masuperagence-6539a.firebaseio.com",
      projectId: "masuperagence-6539a",
      storageBucket: "masuperagence-6539a.appspot.com",
      messagingSenderId: "538540877226",
      appId: "1:538540877226:web:76f4f07d68a7263b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
