import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBarChartComponent } from './echarts-bar-chart.component';

describe('EchartsBarChartComponent', () => {
  let component: EchartsBarChartComponent;
  let fixture: ComponentFixture<EchartsBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
