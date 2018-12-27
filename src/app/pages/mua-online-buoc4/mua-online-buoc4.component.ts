import { Component, OnInit } from '@angular/core';
import { BannerContent_2 } from '../../interfaces/banner-content-2';

@Component({
  selector: 'app-mua-online-buoc4',
  templateUrl: './mua-online-buoc4.component.html',
  styleUrls: ['./mua-online-buoc4.component.sass']
})
export class MuaOnlineBuoc4Component implements OnInit {
  bannerContent: BannerContent_2 = {
    title: 'Hoàn tất hồ sơ',
    subTitle: 'Các bước mua online'
  };
  constructor() { }

  ngOnInit() {
  }

}
