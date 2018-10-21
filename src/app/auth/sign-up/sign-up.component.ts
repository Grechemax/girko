import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  regForm: FormGroup;
  constructor() {
    this.regForm = new FormGroup({
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
      ]),
      'userPass': new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log(this.regForm);
  }

  ngOnInit() {
  }

}
