import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buyonline6Component } from './buyonline6.component';

describe('Buyonline6Component', () => {
  let component: Buyonline6Component;
  let fixture: ComponentFixture<Buyonline6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buyonline6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buyonline6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
