import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "./profile.model";
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AuthService} from "../auth/auth.service";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private profilesUrl = 'https://girko12345.firebaseio.com/profiles.json?auth=';
  private musiciansUrl = 'https://girko12345.firebaseio.com/musicians.json?auth=';
  // profilesList: AngularFireList<any>;
  // selectedProfile: Profile = new Profile();
  // profiles: Profile[];

  constructor(private httpClient: HttpClient,
              private firebase: AngularFireDatabase,
              private authService: AuthService) {}



  fetchProfileData() {
    const token = this.authService.getToken();
    return this.httpClient.get(`${this.profilesUrl}` + token);
  }

  getMusicians() {
    const token = this.authService.getToken();
    return this.httpClient.get(`${this.musiciansUrl}` + token);
  }
}


