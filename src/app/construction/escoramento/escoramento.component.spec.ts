import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscoramentoComponent } from './escoramento.component';

describe('EscoramentoComponent', () => {
  let component: EscoramentoComponent;
  let fixture: ComponentFixture<EscoramentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscoramentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscoramentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
