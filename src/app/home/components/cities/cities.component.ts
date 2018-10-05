import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities = ['Київ', 'Львів', 'Івано-Франківськ', 'Тернопіль', 'Луцьк', 'Рівне'];
  constructor() { }

  ngOnInit() {
  }

}
