import {
  ActivatedRouteSnapshot,
  CanActivate, Router,
  RouterStateSnapshot
}
  from "@angular/router";
import {Observable} from "rxjs/index";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['forbidden']);
    }
  }
}
