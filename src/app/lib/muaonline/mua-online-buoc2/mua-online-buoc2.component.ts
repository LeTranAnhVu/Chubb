import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from '../../../interfaces/banner-content-2';
@Component({
	selector: 'app-mua-online-buoc2',
	templateUrl: './mua-online-buoc2.component.html',
	styleUrls: ['./mua-online-buoc2.component.sass']
})
export class MuaOnlineBuoc2Component implements OnInit {

	constructor(private router: Router) { }
	bannerContent: BannerContent_2 = {
		title: 'Thông Tin Khách Hàng',
		subTitle: 'Các bước mua online'
	};
	nextStep(): void {
		// console.log('not doing');
		this.router.navigate(['/mua-online/mua-online-buoc3']);
	}
	backStep(): void {
		this.router.navigate(['/mua-online/mua-online-buoc1']);

	}

	ngOnInit() {
	}

}
