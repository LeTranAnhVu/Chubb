import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaOnlineBuoc3NhapOtpComponent } from './mua-online-buoc3-nhap-otp.component';

describe('MuaOnlineBuoc3NhapOtpComponent', () => {
  let component: MuaOnlineBuoc3NhapOtpComponent;
  let fixture: ComponentFixture<MuaOnlineBuoc3NhapOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuaOnlineBuoc3NhapOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuaOnlineBuoc3NhapOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
