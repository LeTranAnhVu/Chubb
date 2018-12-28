import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaOnlineBuoc1Component } from './mua-online-buoc1.component';

describe('MuaOnlineBuoc1Component', () => {
  let component: MuaOnlineBuoc1Component;
  let fixture: ComponentFixture<MuaOnlineBuoc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuaOnlineBuoc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuaOnlineBuoc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
