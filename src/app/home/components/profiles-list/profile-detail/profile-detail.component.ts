// import { Component, OnInit } from '@angular/core';
// import {Profile} from "../../../../shared/profile.model";
// import {ActivatedRoute, Params} from "@angular/router";
// import {FirebaseService} from "../../../../shared/firebase.service";
//
// @Component({
//   selector: 'app-profile-detail',
//   templateUrl: './profile-detail.component.html',
//   styleUrls: ['./profile-detail.component.scss']
// })
// export class ProfileDetailComponent implements OnInit {
//   profile: Profile;
//   id: number;
//   constructor(private route: ActivatedRoute,
//               private firebaseService: FirebaseService) { }
//
//   ngOnInit() {
//     this.route.params
//       .subscribe(
//         (params: Params) => {
//           this.id = +params['id'];
//           this.profile = this.firebaseService.getProfile(this.id);
//         }
//       );
//   }
// }

import { Component, OnInit } from '@angular/core';
import {Profile} from '../../../../shared/profile.model';
import {ActivatedRoute, Params} from '@angular/router';
import {FirebaseService} from '../../../../shared/firebase.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {
  profile: Profile;
  id: number;
  constructor(private route: ActivatedRoute,
              private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
    // fetch data from firebase.service.ts
    // this.firebaseService.fetchProfileData().toPromise().then(profiles => {
    //   console.log(profiles);
    //   this.profile = profiles[this.id];
    // });
    this.firebaseService.fetchProfileData()
      .subscribe(
        (gettingValue) => {this.profile = gettingValue[this.id]}
      );
  }
}

