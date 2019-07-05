import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
loggedIn : boolean;

  constructor(private AuthService : AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
this.loggedIn = true
        } else {
this.loggedIn = false
        }
      }
    )
  }

  onSignOut () {
this.AuthService.signOutUser();

  }

}
