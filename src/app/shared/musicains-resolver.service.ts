import {Injectable} from "@angular/core";
import {Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs/index';
import {FirebaseService} from "./firebase.service";



@Injectable()
export class MusicainsResolver implements Resolve<any> {
  constructor(private firebase: FirebaseService) {}

  resolve(): Observable<any> | Promise<any> | any {
    return this.firebase.getMusicians();
  }
}




