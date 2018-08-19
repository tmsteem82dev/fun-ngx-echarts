import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { EchartsLineChartComponent } from './echarts-line-chart/echarts-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    EchartsLineChartComponent
  ],
  imports: [
    BrowserModule, NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
