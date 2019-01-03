import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from 'app/interfaces/banner-content-2';

@Component({
	selector: 'app-mua-online-buoc4',
	templateUrl: './mua-online-buoc4.component.html',
	styleUrls: ['./mua-online-buoc4.component.sass']
})
export class MuaOnlineBuoc4Component implements OnInit {

	constructor(private router: Router) { }
	bannerContent: BannerContent_2 = {
		title: 'Hoàn Tất Hồ Sơ',
		subTitle: 'Các bước mua online'
	};
	nextStep(): void {
		// console.log('not doing');
		this.router.navigate(['/mua-online/mua-online-buoc5']);
	}
	backStep(): void {
		this.router.navigate(['/mua-online/mua-online-buoc3-nhap-otp']);

	}

	ngOnInit() {
	}

}
