import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from '../../interfaces/banner-content-2';

let links = [
	'/mua-online/mua-online-buoc1',
	'/mua-online/mua-online-buoc2',
	'/mua-online/mua-online-buoc3',
	'/mua-online/mua-online-buoc3-nhap-otp',
	'/mua-online/mua-online-buoc4',
	'/mua-online/mua-online-buoc5',
	'/mua-online/mua-online-buoc6-hoanthanh'
];


@Component({
	selector: 'app-mua-online',
	templateUrl: './mua-online.component.html',
	styleUrls: ['./mua-online.component.sass']
})
export class MuaOnlineComponent implements OnInit {
	links: string[];
	nextLink: string;
	prevLink: string;
	cursor = 0;
	bannerContent: BannerContent_2 = {
		title: 'Online',
		subTitle: 'XXXXXXXX'
	};
	constructor(private router: Router) {
		this.links = links;
	}
	nextStep(): void {
		console.log('vo day', this.cursor);
		if (this.cursor < (this.links.length - 1)) {
			this.cursor++;
			// console.log('vo day', this.cursor);
			let link: string = this.links[this.cursor];
			this.router.navigate([link]);
		}
	}
	backStep(): void {
		console.log('vo day back', this.cursor);
		if (this.cursor > 0) {
			this.cursor--;
			// console.log('vo day', this.cursor);
			let link: string = this.links[this.cursor];
			this.router.navigate([link]);
		}
	}
	ngOnInit() {
	}

}
