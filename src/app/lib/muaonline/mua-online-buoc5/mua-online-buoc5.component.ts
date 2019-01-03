import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from 'app/interfaces/banner-content-2';

@Component({
  selector: 'app-mua-online-buoc5',
  templateUrl: './mua-online-buoc5.component.html',
  styleUrls: ['./mua-online-buoc5.component.sass']
})
export class MuaOnlineBuoc5Component implements OnInit {

	constructor(private router: Router) { }
	bannerContent: BannerContent_2 = {
		title: 'Phương Thức Thanh Toán',
		subTitle: 'Các bước mua online'
	};
	nextStep(): void {
		// console.log('not doing');
		this.router.navigate(['/mua-online/mua-online-buoc6-hoanthanh']);
	}
	backStep(): void {
		this.router.navigate(['/mua-online/mua-online-buoc4']);

	}

	ngOnInit() {
	}

}
