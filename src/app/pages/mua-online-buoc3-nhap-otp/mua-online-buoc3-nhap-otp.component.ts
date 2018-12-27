import { Component, OnInit } from '@angular/core';
import { BannerContent_2 } from '../../interfaces/banner-content-2';
@Component({
  selector: 'app-mua-online-buoc3-nhap-otp',
  templateUrl: './mua-online-buoc3-nhap-otp.component.html',
  styleUrls: ['./mua-online-buoc3-nhap-otp.component.sass']
})
export class MuaOnlineBuoc3NhapOTPComponent implements OnInit {
  bannerContent: BannerContent_2 = {
    title: 'Xác nhận mã OTP',
    subTitle: 'Các bước mua online'
  };
  constructor() { }

  ngOnInit() {
  }

}
