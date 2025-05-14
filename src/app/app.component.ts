import { Component, OnInit } from '@angular/core';
import { RouterService } from './core/services/router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'stocky-client';

  constructor(
    private RouterService: RouterService
  ) {}

  ngOnInit(): void {
    if(window.location.pathname === "/") {
      this.RouterService.openDefaultRoute();
    }
  }
}
