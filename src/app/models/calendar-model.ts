interface ICalendar {
	day: number[];
	month: number[];
	year: number[];
}

export class CalendarModel {
	constructor() {
		// khởi tạo ngày tháng năm
		this.calendar = {
			day: this.genNumber(1, 31),
			month: this.genNumber(1, 12),
			year: this.genNumber(1919, 2019)
		};
	}

	// properties
	private calendar: ICalendar;

	// methods
	genNumber(from: number, to: number): number[] {
		let res: number[] = [];
		for (let index: number = from; index <= to; index++) {
			res.push(index);
		}
		return res;
	}
	getCalendar() {
		return this.calendar;
	}

}
