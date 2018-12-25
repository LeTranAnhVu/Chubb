import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buyonline3Component } from './buyonline3.component';

describe('Buyonline3Component', () => {
  let component: Buyonline3Component;
  let fixture: ComponentFixture<Buyonline3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buyonline3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buyonline3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
