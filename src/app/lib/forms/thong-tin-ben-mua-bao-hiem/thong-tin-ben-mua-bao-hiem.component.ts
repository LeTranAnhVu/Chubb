import { Component, OnInit, ViewChild } from '@angular/core';
import { ICalendar } from 'app/interfaces/calendar';
import { CalendarModel } from 'app/models/calendar-model';
@Component({
	selector: 'app-thong-tin-ben-mua-bao-hiem',
	templateUrl: './thong-tin-ben-mua-bao-hiem.component.html',
	styleUrls: ['./thong-tin-ben-mua-bao-hiem.component.sass']
})
export class ThongTinBenMuaBaoHiemComponent implements OnInit {

	@ViewChild('temForm') form;
	calendarModel: ICalendar;
	constructor() {
		this.calendarModel = new CalendarModel().getCalendar();
	}

	ngOnInit() {
	}

}
