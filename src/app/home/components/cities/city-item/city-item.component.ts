import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
  @Input() city: string;
  constructor() { }

  ngOnInit() {
  }

}
