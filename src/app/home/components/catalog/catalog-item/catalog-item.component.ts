import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../../auth/auth.service";

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {
  @Input() catalogItem;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  navigateGuard() {
    this.authService.isAuthenticated() ? this.router.navigate(['this.catalogItem.link']) : this.router.navigate(['forbidden']);
    console.log(this.authService.isAuthenticated());
  }
}
