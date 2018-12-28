import { Component, OnInit } from '@angular/core';
import { BannerContent_2 } from '../../interfaces/banner-content-2';
@Component({
	selector: 'app-mua-online-buoc2',
	templateUrl: './mua-online-buoc2.component.html',
	styleUrls: ['./mua-online-buoc2.component.sass']
})
export class MuaOnlineBuoc2Component implements OnInit {
	bannerContent: BannerContent_2 = {
		title: 'Thông tin thẩm định',
		subTitle: 'Các bước mua online'
	};
	constructor() { }

	ngOnInit() {
	}

}
