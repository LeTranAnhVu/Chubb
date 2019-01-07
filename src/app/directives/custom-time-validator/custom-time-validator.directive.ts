import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { TimeModel } from 'app/models/time-model';

@Directive({
	selector: '[appCustomTimeValidator]',
	providers: [{ provide: NG_VALIDATORS, useExisting: CustomTimeValidatorDirective, multi: true }]
})
export class CustomTimeValidatorDirective implements Validator {
	constructor() { }


	validate(control: AbstractControl) {
		const elementValue = control.value;
		let time: TimeModel = new TimeModel();
		let isTimeValid = time.formatTime(
			parseInt(elementValue.year, 10),
			parseInt(elementValue.month, 10),
			parseInt(elementValue.day, 10));
		if (isTimeValid) {
			// time is good
			return null;
		} else {
			// console.log('error from validator from directive');
			return {invalidTime: true};
		}
		return null;
	}


}
