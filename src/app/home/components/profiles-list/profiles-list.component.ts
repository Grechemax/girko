import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {
  profiles = [
    {name: 'Степан Дзюба', phone: 19812345678, money: 10500, location: 'Львів, Луцьк, Київ', imgPath: 'assets/w1.jpg'},
    {name: 'Мирон Мавко', phone: 29812345678, money: 10600, location: 'Львів, Мукачево, Чернівці', imgPath: 'assets/w2.jpg'},
    {name: 'Софія Стрижак', phone: 39812345678, money: 10700, location: 'Рівне, Луцьк', imgPath: 'assets/w3.jpg'},
    {name: 'Анастасія Головіна', phone: 49812345678, money: 10800, location: 'Львів, Тернопіль', imgPath: 'assets/w4.jpg'},
    {name: 'Петро Бампер', phone: 59812345678, money: 10900, location: 'Іванофранкіськ, Ужгород', imgPath: 'assets/w5.jpg'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
