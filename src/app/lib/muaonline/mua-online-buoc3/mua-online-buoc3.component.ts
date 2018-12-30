import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from '../../../interfaces/banner-content-2';

@Component({
	selector: 'app-mua-online-buoc3',
	templateUrl: './mua-online-buoc3.component.html',
	styleUrls: ['./mua-online-buoc3.component.sass']
})
export class MuaOnlineBuoc3Component implements OnInit {

	constructor(private router: Router) { }
	bannerContent: BannerContent_2 = {
		title: 'Thẩm Định',
		subTitle: 'Các bước mua online'
	};
	nextStep(): void {
		// console.log('not doing');
		this.router.navigate(['/mua-online/mua-online-buoc3-nhap-otp']);
	}
	backStep(): void {
		this.router.navigate(['/mua-online/mua-online-buoc2']);

	}

	ngOnInit() {
	}
}
