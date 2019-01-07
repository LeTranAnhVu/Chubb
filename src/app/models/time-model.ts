export class TimeModel {
	constructor() {
	}
	private validatedTime: Date = null;
	public formatTime(year: number, month: number, day: number): boolean {
		let temp = `${year}-${month}-${day}`;
		let time = new Date(temp);
		// validate
		if (time.getFullYear() !== year || (time.getMonth() + 1) !== month || time.getDate() !== day) {
			// any of mismatch would be false
			return false;
		}
		this.validatedTime = time;
		return true;

	}

	getValidatedTime() {
		return this.validatedTime;
	}
}
