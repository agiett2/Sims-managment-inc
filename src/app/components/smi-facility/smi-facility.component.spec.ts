import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmiFacilityComponent } from './smi-facility.component';

describe('SmiFacilityComponent', () => {
  let component: SmiFacilityComponent;
  let fixture: ComponentFixture<SmiFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmiFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmiFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
