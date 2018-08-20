import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echarts-pie-chart',
  templateUrl: './echarts-pie-chart.component.html',
  styleUrls: ['./echarts-pie-chart.component.css']
})
export class EchartsPieChartComponent implements OnInit {

  options: any;

  constructor() { }

  ngOnInit() {

    const data = [
      { value: 456, name: 'Answers from bot aligned perfectly' },
      { value: 156, name: 'Answers from bot aligned moderately well' },
      { value: 200, name: 'Answers from bot aligned somewhat well' },
      { value: 450, name: 'Conversation was a disaster' },
      { value: 100, name: 'Conversation did not have value' }
    ];

    this.options = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['Answers from bot aligned perfectly', 'Answers from bot aligned moderately well',
          'Answers from bot aligned somewhat well', 'Conversation was a disaster', 'Conversation did not have value']
      },
      series: {
        name: 'First version',
        type: 'pie',
        data: data
      }
    };
  }
}
