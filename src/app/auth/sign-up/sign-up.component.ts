import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as cities from 'src/app/shared/cities.json';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  regForm: FormGroup;
  j: number[] = [];
  constructor() {
    this.regForm = new FormGroup({
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
      ]),
      'userPass': new FormControl('', Validators.required),
      'userCity': new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log(this.regForm);
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
