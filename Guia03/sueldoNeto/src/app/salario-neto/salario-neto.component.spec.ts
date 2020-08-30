import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarioNetoComponent } from './salario-neto.component';

describe('SalarioNetoComponent', () => {
  let component: SalarioNetoComponent;
  let fixture: ComponentFixture<SalarioNetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarioNetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarioNetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
