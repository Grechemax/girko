import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../shared/firebase.service';
import {AuthService} from "../../../auth/auth.service";



@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {
  profiles;
  stream;


  constructor(private firebaseService: FirebaseService,
              private authService: AuthService) {
    console.log('is Authenticated: ', this.authService.isAuthenticated());
  }

  ngOnInit() {
    this.stream = this.firebaseService.fetchProfileData(); // return stream approach. Avoid subscribe in service.
  }
}
