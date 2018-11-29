import * as firebase from 'firebase'
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  token: string;

  signUpUser(email: string, password: string) {
    console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      )
      .catch(
        error => console.log('error in signIn: ', error)
      );
  }

  signInUser(email: string, password: string) {
   firebase.auth().signInWithEmailAndPassword(email, password)
     .then(
       response => console.log(response)
     )
     .catch(
       error => console.log(error)
     );
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (tkn: string) => this.token = tkn
      )
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}//
