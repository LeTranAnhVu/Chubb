import { Component, OnInit } from '@angular/core';
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
	constructor() {
		this.links = links;
		// this.nextLink = '';
		// this.prevLink = '';
	}
	nextHandler(): void {
		// console.log('vo day', this.links.length, this.cursor);
		if (this.cursor < this.links.length) {
			this.cursor++;
			console.log('vo day', this.cursor);
		}

	}

	ngOnInit() {
	}

}
