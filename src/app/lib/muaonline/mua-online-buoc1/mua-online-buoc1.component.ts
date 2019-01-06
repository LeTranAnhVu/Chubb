import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from 'app/interfaces/banner-content-2';
import { ICalendar } from 'app/interfaces/calendar';
import { CalendarModel } from 'app/models/calendar-model';

@Component({
	selector: 'app-mua-online-buoc1',
	templateUrl: './mua-online-buoc1.component.html',
	styleUrls: ['./mua-online-buoc1.component.sass']
})

export class MuaOnlineBuoc1Component implements OnInit {
	// used viewchild to get the ngForm from this component's html
	@ViewChild('temForm') form: ElementRef;
	public calendarModel: ICalendar;
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
	log(e,t){
		console.log('log');
		console.log(e);
		console.log(t.valid);
		console.log(t.touched);
	}

	ngOnInit() {
		console.log('heheheh');
		setTimeout(() => {
			console.log(this.form);
		}, 1000);
	}

}
