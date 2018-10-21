import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../../shared/firebase.service";
import {Profile} from "../../../shared/profile.model";
import {element} from "@angular/core/src/render3/instructions";

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {
  profiles: Profile[];
  // stream;


  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    // this.stream = this.firebaseService.fetchData(); // return stream approach. Avoid subscribe in service.
    // this.firebaseService.fetchData(); // httpClient approach
    // this.profiles = this.firebaseService.getProfiles();


    const x = this.firebaseService.getData();
    x.snapshotChanges().subscribe(
      item => {
        this.profiles = [];
        item.forEach(element => {
          const y = element.payload.toJSON();
          y['$key'] = element.key;
          this.profiles.push(y as Profile);
        });
        console.log('profiles in ProfilesListComponent', this.profiles);
      }
    );
  }
}
