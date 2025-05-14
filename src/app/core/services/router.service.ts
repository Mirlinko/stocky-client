import { NavigationEnd, Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { filter } from "rxjs";
import { STATES } from "../../constants/states";

@Injectable()
export class RouterService {
  constructor(
    private router: Router
  ) {}

  go(path: string, params?: any) {
    return this.router.navigate([path], { queryParams: params });
  }

  goToUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  getCurrentUrl() {
    return this.router.url;
  }

  getParam(paramName: string) {
    return this.router.routerState.snapshot.root.queryParams[paramName];
  }

  getParams() {
    return this.router.routerState.snapshot.root.queryParams;
  }

  onNavigationEnd() {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
  }

  openDefaultRoute() {
    return this.go(STATES.dashboard.path);
  }

  isRoute(url: string) {
    return this.router.url === url;
  }
}