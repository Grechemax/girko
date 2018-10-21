import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Profile} from './shared/profile.model';
import {Observable} from "rxjs/index";
import {FirebaseService} from "./shared/firebase.service";

// export class ProfileListResolverService implements Resolve<Profile[]> {
//   constructor(private firebase: FirebaseService) {}
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile[]> {
//     return this.firebase.getData();
//   }
// }
