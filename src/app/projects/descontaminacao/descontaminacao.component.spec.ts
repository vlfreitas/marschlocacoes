import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescontaminacaoComponent } from './descontaminacao.component';

describe('DescontaminacaoComponent', () => {
  let component: DescontaminacaoComponent;
  let fixture: ComponentFixture<DescontaminacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescontaminacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescontaminacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
