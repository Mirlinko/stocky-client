import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ChartComponent
  ]
})
export class SharedModule { }