import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../shared/firebase.service';
import {AuthService} from "../../../auth/auth.service";
import {Profile} from "../../../shared/oop/profile.model";



@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {
  profiles: Profile;
  isAuthenticated: boolean;
  stream;


  constructor(private firebaseService: FirebaseService,
              private authService: AuthService) {
    console.log('is Authenticated: ', this.authService.isAuthenticated());
  }

  ngOnInit() {
    // this.stream = this.firebaseService.fetchProfileData(); // return stream approach. Avoid subscribe in service.
    this.firebaseService.fetchProfileData()
      .subscribe(
        (resp) => {
          this.profiles = resp;
          console.log(this.profiles);
        }
      );
    // console.log(this.firebaseService.fetchProfileData());
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
