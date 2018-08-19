import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsLineChartComponent } from './echarts-line-chart.component';

describe('EchartsLineChartComponent', () => {
  let component: EchartsLineChartComponent;
  let fixture: ComponentFixture<EchartsLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
