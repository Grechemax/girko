import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {CanComponentDeactivate} from "../can-deactivate-guard.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit, CanComponentDeactivate {
  changesSaved = false;
  regForm: FormGroup;
  j: number[] = [];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.regForm = new FormGroup({
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'userPass': new FormControl('', Validators.required),
      'userCity': new FormControl('', Validators.required),
    });
  }


  onSignUp(form: NgForm) {
    const pass = form.value.userPass;
    const email = form.value.userEmail;
    this.authService.signUpUser(email, pass)
    this.changesSaved = true;
    console.log(form);
    if (this.regForm.valid) {this.router.navigate(['/'])}
  }

  ngOnInit() {
    for (let i = 1928; i <= 2018; i++) {
      this.j.push(i);
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.regForm.touched && !this.changesSaved) {
      return confirm('Ви дійсно бажаєте залишити сторінку реєстрації?');
    }
    return true;
  }

}
