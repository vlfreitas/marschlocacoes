import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryBathroomComponent } from './luxurybathroom.component';

describe('LuxuryBathroomComponent', () => {
  let component: LuxuryBathroomComponent;
  let fixture: ComponentFixture<LuxuryBathroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LuxuryBathroomComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxuryBathroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
