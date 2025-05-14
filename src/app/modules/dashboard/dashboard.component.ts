import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class DashboardComponent implements OnInit, OnDestroy {
  input = { search: "" };
  subscriptions: Array<Subscription> = [];
  
  constructor() { }

  ngOnInit() {
    this.subscriptions.push();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onEnter() {
    
  }
}
