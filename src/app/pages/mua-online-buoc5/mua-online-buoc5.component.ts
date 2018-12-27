import { Component, OnInit } from '@angular/core';
import { BannerContent_2 } from '../../interfaces/banner-content-2';
@Component({
  selector: 'app-mua-online-buoc5',
  templateUrl: './mua-online-buoc5.component.html',
  styleUrls: ['./mua-online-buoc5.component.sass']
})
export class MuaOnlineBuoc5Component implements OnInit {
  bannerContent: BannerContent_2 = {
    title: 'Phương thức thanh toán',
    subTitle: 'Các bước mua online'
  };
  constructor() { }

  ngOnInit() {
  }

}
