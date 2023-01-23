import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepDisordersComponent } from './sleep-disorders.component';

describe('SleepDisordersComponent', () => {
  let component: SleepDisordersComponent;
  let fixture: ComponentFixture<SleepDisordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepDisordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepDisordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
