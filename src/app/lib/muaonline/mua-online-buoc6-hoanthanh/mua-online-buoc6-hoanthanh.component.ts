import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from '../../../interfaces/banner-content-2';

@Component({
  selector: 'app-mua-online-buoc6-hoanthanh',
  templateUrl: './mua-online-buoc6-hoanthanh.component.html',
  styleUrls: ['./mua-online-buoc6-hoanthanh.component.sass']
})
export class MuaOnlineBuoc6HoanthanhComponent implements OnInit {


	constructor(private router: Router) { }
	bannerContent: BannerContent_2 = {
		title: 'Đăng Kí Thành Công',
		subTitle: 'Các bước mua online'
	};

	ngOnInit() {
	}

}
