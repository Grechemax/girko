import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalogItems = [
    { category: 'Фотографи', image:"assets/c1.jpg", routerLink: '#',  list: ['Роман Коваль', 'Віктор Цимбалістий']},
    { category: 'Відеооператори', image:"assets/c2.jpg", routerLink: '#',  list: ['Денис Машенко', 'Мирон Мавко']},
    { category: 'Музиканти', image:"assets/c3.jpg", routerLink: 'musicians', list: ['Руслан Сайковський', 'Анна Погоріла']},
    { category: 'Ведучі', image:"assets/c4.jpg", routerLink: '#',  list: ['Олександр Довженко', 'Василь Швед']}
  ]
  constructor() { }

  ngOnInit() {
  }

}
