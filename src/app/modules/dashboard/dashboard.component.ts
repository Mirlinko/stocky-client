import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  input = { search: "" };
  subscriptions: Array<Subscription> = [];
  stockData: any;
  conditions = {
    isStockDataLoading: false
  }
  
  constructor(
    private HttpService: HttpService
  ) { }

  async onEnter() {
    this.setStockDataLoading(true);

    const { data, error } = await this.HttpService.get("chart", { ticker: this.input.search });
    
    this.setStockDataLoading(false);

    if (!data || error) {
      return console.warn(error || "No data found");
    }

    this.stockData = data;

    console.log({ data, error });
  }

  private setStockDataLoading(bool: boolean) {
    this.conditions.isStockDataLoading = bool;
  }
}
