import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from '../../../interfaces/banner-content-2';
import { CalendarModel } from '../../../models/calendar-model';

@Component({
	selector: 'app-mua-online-buoc1',
	templateUrl: './mua-online-buoc1.component.html',
	styleUrls: ['./mua-online-buoc1.component.sass']
})
export class MuaOnlineBuoc1Component implements OnInit {
	calendarModel = {};
	constructor(private router: Router) { 
		this.calendarModel = new CalendarModel().getCalendar();
	}
	bannerContent: BannerContent_2 = {
		title: 'Tính Phí',
		subTitle: 'Các bước mua online'
	};
	nextStep(): void {
		// console.log('not doing');
		this.router.navigate(['/mua-online/mua-online-buoc2']);
	}
	backStep(): void {
		this.router.navigate(['/mua-online/mua-online-buoc1']);

	}

	ngOnInit() {
	}

}
