import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "./firebase.service";
import {Profile} from "../../../shared/profile.model";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {
  profiles: Profile[];
  subscription: Subscription

  constructor(private firebaseSRV: FirebaseService) {}

  ngOnInit() {
    this.firebaseSRV.fetchData();
    // this.subscription = this.firebaseSRV.profileChanged.subscribe(
    //   (profiles: Profile[]) => {
    //     this.profiles = profiles;
    //   }
    // );
    // this.profiles = this.firebaseSRV.getProfiles();
  }



  onGetProfiles() {
    this.profiles = this.firebaseSRV.getProfiles();
  }
}
