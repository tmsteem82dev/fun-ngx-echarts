import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { EchartsLineChartComponent } from './echarts-line-chart/echarts-line-chart.component';
import { EchartsBarChartComponent } from './echarts-bar-chart/echarts-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    EchartsLineChartComponent,
    EchartsBarChartComponent
  ],
  imports: [
    BrowserModule, NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
