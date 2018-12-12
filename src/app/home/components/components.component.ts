import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  isLogged;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isLogged = this.auth.isAuthenticated();
  }

}
