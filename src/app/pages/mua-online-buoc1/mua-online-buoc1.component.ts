import { Component, OnInit } from '@angular/core';
import { BannerContent_2 } from '../../interfaces/banner-content-2';

@Component({
  selector: 'app-mua-online-buoc1',
  templateUrl: './mua-online-buoc1.component.html',
  styleUrls: ['./mua-online-buoc1.component.sass']
})
export class MuaOnlineBuoc1Component implements OnInit {
  bannerContent: BannerContent_2 = {
    title: 'Tính phí',
    subTitle: 'Các bước mua online'
  };
  constructor() { }

  ngOnInit() {
  }

}
