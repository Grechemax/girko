import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalogItems = [
    { category: 'Фотографи', image:"assets/c1.jpg"},
    { category: 'Відеооператори', image:"assets/c2.jpg"},
    { category: 'Музиканти', image:"assets/c3.jpg"},
    { category: 'Ведучі', image:"assets/c4.jpg"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
