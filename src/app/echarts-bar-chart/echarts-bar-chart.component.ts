import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echarts-bar-chart',
  templateUrl: './echarts-bar-chart.component.html',
  styleUrls: ['./echarts-bar-chart.component.css']
})
export class EchartsBarChartComponent implements OnInit {

  options: any;

  constructor() { }

  ngOnInit() {
    const data1 = [20, 100, 35, 55, 35];
    const data2 = [40, 13, 20, 52, 25];

    this.options = {
      title: {
        text: 'Echarts bar chart'
      },
      tooltip: {
        trigger: 'item'
      },
      xAxis: {
        type: 'category',
        data: ['2006', '2007', '2008', '2009', '2010']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        type: 'bar',
        data: data1
      },
      {
        type: 'bar',
        data: data2
      }]
    };
  }

}
