import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaOnlineBuoc3Component } from './mua-online-buoc3.component';

describe('MuaOnlineBuoc3Component', () => {
  let component: MuaOnlineBuoc3Component;
  let fixture: ComponentFixture<MuaOnlineBuoc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuaOnlineBuoc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuaOnlineBuoc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
