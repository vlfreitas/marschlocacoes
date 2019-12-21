import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndaimesComponent } from './andaimes.component';

describe('AndaimesComponent', () => {
  let component: AndaimesComponent;
  let fixture: ComponentFixture<AndaimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndaimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndaimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
