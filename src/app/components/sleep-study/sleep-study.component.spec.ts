import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepStudyComponent } from './sleep-study.component';

describe('SleepStudyComponent', () => {
  let component: SleepStudyComponent;
  let fixture: ComponentFixture<SleepStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
