import { Component, OnInit } from '@angular/core';
import { BannerContent } from 'app/interfaces/banner-content';
@Component({
	// tslint:disable-next-line:component-selector
	selector: 'ngbd-accordion-basic',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

	constructor() { }
	bannerContent: BannerContent = {
		img: '/assets/img/about/about_banner.png',
		titles: ['Giới Thiệu Về Chubb']
	};
	ngOnInit() {
	}
}
