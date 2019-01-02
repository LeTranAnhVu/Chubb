import { Component, OnInit } from '@angular/core';
import { CalendarModel } from '../../../models/calendar-model';
import { ICalendar } from '../../../interfaces/calendar';
@Component({
	selector: 'app-thong-tin-ben-mua-bao-hiem',
	templateUrl: './thong-tin-ben-mua-bao-hiem.component.html',
	styleUrls: ['./thong-tin-ben-mua-bao-hiem.component.sass']
})
export class ThongTinBenMuaBaoHiemComponent implements OnInit {
	calendarModel: ICalendar;
	constructor() {
		this.calendarModel = new CalendarModel().getCalendar();
	}

	ngOnInit() {
	}

}
