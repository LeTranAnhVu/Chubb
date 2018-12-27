import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaOnlineBuoc2Component } from './mua-online-buoc2.component';

describe('MuaOnlineBuoc2Component', () => {
  let component: MuaOnlineBuoc2Component;
  let fixture: ComponentFixture<MuaOnlineBuoc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuaOnlineBuoc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuaOnlineBuoc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
