import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echarts-line-chart',
  templateUrl: './echarts-line-chart.component.html',
  styleUrls: ['./echarts-line-chart.component.css']
})
export class EchartsLineChartComponent implements OnInit {
  options: any;

  constructor() { }

  ngOnInit() {
    const data = [];
    for (let i = 0; i < 50; i++) {
      data.push([i * 25, 100 * Math.random()]);
    }

    this.options = {
      title: {
        text: 'Echarts Line chart'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'value'
      },
      series: {
        type: 'line',
        data: data
      }
    };
  }

}
