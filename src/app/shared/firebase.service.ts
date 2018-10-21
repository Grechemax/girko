import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "./profile.model";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  profilesList: AngularFireList<any>;
  // selectedProfile: Profile = new Profile();
  profiles: Profile[];

  constructor(private httpClient: HttpClient, private firebase: AngularFireDatabase) {
  }

  // getProfiles() {
  //   return this.profiles;
  // }

  getProfile(id: number) {
    console.log('getting id in GetProfile', this.profiles[id]);
    return this.profilesList[id];
  }

  getData() {
    this.profilesList = this.firebase.list('profiles'); // ????? why
    console.log('profiles List in service', this.profilesList);
    return this.profilesList;
  }

  // fetchData() {
  //   // return this.httpClient.get<Profile[]>('https://girko12345.firebaseio.com/profiles.json', {
  //   this.httpClient.get<Profile[]>('https://girko12345.firebaseio.com/profiles.json', {
  //     observe: 'body',
  //     responseType: 'json'
  //   }).subscribe(
  //         (resp) => {
  //           this.setProfiles(resp); // using method to write gotten profiles to service's profile.
  //           console.log('service fetch',  this.profiles);
  //         }
  //       );
  //   }
  //
  //   setProfiles(firebaseProfiles: Profile[]) {
  //     this.profiles = firebaseProfiles; // writting gotten profiles to service's profile.
  //   }
  }

