import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "./profile.model";
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AuthService} from "../auth/auth.service";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private profilesUrl = 'https://girko12345.firebaseio.com/profiles.json';
  private musiciansUrl = 'https://girko12345.firebaseio.com/musicians.json';
  // profilesList: AngularFireList<any>;
  // selectedProfile: Profile = new Profile();
  // profiles: Profile[];

  constructor(private httpClient: HttpClient,
              private firebase: AngularFireDatabase,
              private authService: AuthService) {}

  // getProfiles() {
  //   return this.profiles;
  // }

  // getProfile(id: number) {
  //   console.log('getting id in GetProfile', this.profiles[id]);
  //   return this.profilesList[id];
  // }
  //
  // getData() {
  //   this.profilesList = this.firebase.list('profiles'); // ????? why
  //   console.log('profiles List in service', this.profilesList);
  //   return this.profilesList;
  // }

  // fetch all data from firebase


  fetchProfileData() {
    // const token = this.authService.getToken();
    return this.httpClient.get(`${this.profilesUrl}`);
  }

  getMusicians() {
    // const token = this.authService.getToken();
    return this.httpClient.get(`${this.musiciansUrl}`);
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


