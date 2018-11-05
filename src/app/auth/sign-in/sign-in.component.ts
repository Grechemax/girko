import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
//  Template-Driven
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }


  onSignIn(form: NgForm) {
  const email = form.value.email;
  const pass = form.value.password;
    this.auth.signInUser(email, pass);
  }
}//
