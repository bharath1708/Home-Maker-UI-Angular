import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChartOneComponent } from './sub-chart-one.component';

describe('SubChartOneComponent', () => {
  let component: SubChartOneComponent;
  let fixture: ComponentFixture<SubChartOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubChartOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubChartOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
