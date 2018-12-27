import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaOnlineBuoc5Component } from './mua-online-buoc5.component';

describe('MuaOnlineBuoc5Component', () => {
  let component: MuaOnlineBuoc5Component;
  let fixture: ComponentFixture<MuaOnlineBuoc5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuaOnlineBuoc5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuaOnlineBuoc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
