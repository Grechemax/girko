import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import * as cities from 'src/app/shared/cities.json';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  regForm: FormGroup;
  j: number[] = [];

  constructor(private auth: AuthService) {
    this.regForm = new FormGroup({
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
      ]),
      'userPass': new FormControl('', Validators.required),
      'userCity': new FormControl('', Validators.required),
    });
  }


    onSignUp(form: NgForm) {
    const pass = form.value.userPass;
    const email = form.value.userEmail;
    this.auth.signUpUser(email, pass);
    }

  ngOnInit() {
    for (let i = 1928; i <= 2018; i++) {
      this.j.push(i);
    }
    // for(let i = 0; i < cities.length; i++) {
    //   let obj = cities[i];
    //   console.log(obj.name);
    // }
  }

}
