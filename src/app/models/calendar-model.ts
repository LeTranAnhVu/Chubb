interface ICalendar {
	day: string[];
	month: string[];
	year: string[];
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
	genNumber(from: number, to: number): string[] {
		let res: string[] = [];
		for (let index: any = from; index <= to; index++) {
			// console.log(typeof(index));
			
			res.push((index.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})));
		}
		return res;
	}
	getCalendar() {
		return this.calendar;
	}

}
