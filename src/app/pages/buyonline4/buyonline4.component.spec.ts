import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buyonline4Component } from './buyonline4.component';

describe('Buyonline4Component', () => {
  let component: Buyonline4Component;
  let fixture: ComponentFixture<Buyonline4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buyonline4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buyonline4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
