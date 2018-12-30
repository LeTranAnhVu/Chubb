import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaOnlineBuoc4Component } from './mua-online-buoc4.component';

describe('MuaOnlineBuoc4Component', () => {
  let component: MuaOnlineBuoc4Component;
  let fixture: ComponentFixture<MuaOnlineBuoc4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuaOnlineBuoc4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuaOnlineBuoc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
