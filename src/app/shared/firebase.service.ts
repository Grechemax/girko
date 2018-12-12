import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "./oop/profile.model";
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private profilesUrl = 'https://girko12345.firebaseio.com/profiles.json';
  private musiciansUrl = 'https://girko12345.firebaseio.com/musicians.json';
  // profilesList: AngularFireList<any>;
  // selectedProfile: Profile = new Profile();
  profiles: Profile[];

  constructor(private httpClient: HttpClient,
              private firebase: AngularFireDatabase,
              private authService: AuthService) {
  }


  fetchProfileData() {
    return this.httpClient.get<Profile>(`${this.profilesUrl}`);
  }

  getMusicians() {
    return this.httpClient.get(`${this.musiciansUrl}`);
  }
}


