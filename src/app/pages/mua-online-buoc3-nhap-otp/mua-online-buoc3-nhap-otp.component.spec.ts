import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaOnlineBuoc3NhapOTPComponent } from './mua-online-buoc3-nhap-otp.component';

describe('MuaOnlineBuoc3NhapOTPComponent', () => {
  let component: MuaOnlineBuoc3NhapOTPComponent;
  let fixture: ComponentFixture<MuaOnlineBuoc3NhapOTPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuaOnlineBuoc3NhapOTPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuaOnlineBuoc3NhapOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
