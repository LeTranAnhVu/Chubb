import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buyonline5Component } from './buyonline5.component';

describe('Buyonline5Component', () => {
  let component: Buyonline5Component;
  let fixture: ComponentFixture<Buyonline5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buyonline5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buyonline5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
