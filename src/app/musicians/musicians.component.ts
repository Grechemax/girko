import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import 'rxjs/operators';


@Component({
  selector: 'app-musicians',
  templateUrl: './musicians.component.html',
  styleUrls: ['./musicians.component.scss']
})
export class MusiciansComponent implements OnInit {
  musicians: {name: string, price: number}[];
  @Input() musResolver;
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(
      (data: Data) => {
        this.musicians = data['musResolver'];
        console.log(this.musicians);
      }
    );
  }

  ngOnInit() {}
}
