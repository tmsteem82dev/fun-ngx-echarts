import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsPieChartComponent } from './echarts-pie-chart.component';

describe('EchartsPieChartComponent', () => {
  let component: EchartsPieChartComponent;
  let fixture: ComponentFixture<EchartsPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
