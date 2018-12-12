import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {tap} from "rxjs/internal/operators";
import {AuthService} from "../auth/auth.service";
import {Injectable} from "@angular/core";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getToken();
    // const headerConfig = {
    //   'Content-type': 'application/json',
    //   'Accept': 'application/json'
    // };

    // const newRequest = req.clone({setHeaders: headerConfig});
    // if (accessToken) {
    //   headerConfig['Authorization'] = `bearer ${accessToken}`;
    // }

    const newRequest = req.clone({params: req.params.set('auth', accessToken)});

    // return next.handle(newRequest);
    return next
      .handle(newRequest)
      .pipe(tap(
        event => console.log('Here is my Interseptor', event),
        err => {
        if (err.status === 401) {
          console.log('Custom error: You are not authenticated!');
        }
      }
      ));
  }
}
