import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from 'app/interfaces/banner-content-2';

@Component({
	selector: 'app-mua-online-buoc3-nhap-otp',
	templateUrl: './mua-online-buoc3-nhap-otp.component.html',
	styleUrls: ['./mua-online-buoc3-nhap-otp.component.sass']
})
export class MuaOnlineBuoc3NhapOtpComponent implements OnInit {

	constructor(private router: Router) { }
	bannerContent: BannerContent_2 = {
		title: 'Xác nhận mã OTP',
		subTitle: 'Các bước mua online'
	};
	nextStep(): void {
		// console.log('not doing');
		this.router.navigate(['/mua-online/mua-online-buoc4']);
	}
	backStep(): void {
		this.router.navigate(['/mua-online/mua-online-buoc3']);

	}

	ngOnInit() {
	}
}
