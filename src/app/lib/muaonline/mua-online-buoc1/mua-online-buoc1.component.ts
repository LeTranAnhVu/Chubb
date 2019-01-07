import { Component, OnInit, ViewChild } from '@angular/core';
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
	@ViewChild('temForm') form: HTMLInputElement;

	// properties
	calendarModel: ICalendar;

	// this property is used to flaging the html message
	isGoodBirthday = true;
	nextStepIsClicked = false;

	// this value is used to show in html
	bannerContent: BannerContent_2 = {
		title: 'Tính Phí',
		subTitle: 'Các bước mua online'
	};





	constructor(private router: Router) {
		this.calendarModel = new CalendarModel().getCalendar();
	}
	// methods
	nextStep(): void {

		if (this.nextStepIsClicked === false) {
			this.nextStepIsClicked = true;
		}

		if ((<any>this.form).valid) {
			// collect data

			// navigate to next step
			this.router.navigate(['/mua-online/mua-online-buoc2']);
		}
	}
	backStep(): void {
		this.router.navigate(['/mua-online/mua-online-buoc1']);

	}

	ngOnInit() { }

}
