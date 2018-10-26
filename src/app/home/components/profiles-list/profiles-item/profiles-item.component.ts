import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profiles-item',
  templateUrl: './profiles-item.component.html',
  styleUrls: ['./profiles-item.component.scss']
})
export class ProfilesItemComponent implements OnInit {
  @Input() item;
  @Input() profileId: number;
  constructor() { }

  ngOnInit() {
  }
}
