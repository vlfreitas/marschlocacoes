import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdchamberComponent } from './coldchamber.component';

describe('ColdchamberComponent', () => {
  let component: ColdchamberComponent;
  let fixture: ComponentFixture<ColdchamberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdchamberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdchamberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
