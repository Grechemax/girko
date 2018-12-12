import { Component, OnInit } from '@angular/core';
import * as cities from 'src/app/shared/cities.json';
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // data: Observable<Array<any>>;

  constructor() {
    // this.data = service.getPeople();
    // const citiess = (<any>cities).name;
    // console.log(citiess);
  }

  ngOnInit() {
  }

}
