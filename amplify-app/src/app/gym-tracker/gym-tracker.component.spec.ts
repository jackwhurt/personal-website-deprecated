import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymTrackerComponent } from './gym-tracker.component';

describe('GymTrackerComponent', () => {
  let component: GymTrackerComponent;
  let fixture: ComponentFixture<GymTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
