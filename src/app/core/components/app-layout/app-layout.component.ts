import { STATE_URL_TO_TITLE } from '../../../constants/states';
import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../services/router.service';
import { TABS } from 'src/app/constants/tabs';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {
  title = "";
  tabs = TABS;

  constructor(
    private RouterService: RouterService
  ) {}

  ngOnInit(): void {
    this.setTitle();

    this.RouterService.onNavigationEnd().subscribe(event => {
      this.setTitle();
    });
  }

  private setTitle() {
    this.title = STATE_URL_TO_TITLE[this.RouterService.getCurrentUrl()];
  }
}
