import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signForm: FormGroup;
  constructor(private authService: AuthService) {
    this.signForm = new FormGroup({
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'userPass': new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }


  onSignIn(form: NgForm) {
  const email = form.value.userEmail;
  const pass = form.value.userPass;
    this.authService.signInUser(email, pass);
    console.log(email, pass);
    console.log('TYYYYYYYYYPE', typeof email);
  }
}//
