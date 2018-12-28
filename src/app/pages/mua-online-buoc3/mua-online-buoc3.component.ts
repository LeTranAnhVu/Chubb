import { Component, OnInit } from '@angular/core';
import { BannerContent_2 } from '../../interfaces/banner-content-2';

@Component({
	selector: 'app-mua-online-buoc3',
	templateUrl: './mua-online-buoc3.component.html',
	styleUrls: ['./mua-online-buoc3.component.sass']
})
export class MuaOnlineBuoc3Component implements OnInit {
	bannerContent: BannerContent_2 = {
		title: 'Câu hỏi thẩm định',
		subTitle: 'Các bước mua online'
	};
	constructor() { }

	ngOnInit() {
	}

}
