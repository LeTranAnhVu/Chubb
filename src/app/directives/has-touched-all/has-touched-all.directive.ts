import { Directive } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
	selector: '[appHasTouchedAll]',
	providers: [{ provide: NG_VALIDATORS, useExisting: HasTouchedAllDirective, multi: true }]

})



export class HasTouchedAllDirective implements Validator {

	constructor() { }

	validate(form: AbstractControl) {

		console.log("#######################");
		console.log(form);
		console.log('form.dirty',form.dirty);
		console.log('form.pristine', form.pristine);
		console.log("#######################");

		
		// let isTouchedAll = hasTouchedAll(form);
		// console.log('isTouchedAll?? ',isTouchedAll);


		return null;
	}


}



function hasTouchedAll(control) {
	console.log('================================');
	console.log('============');
	console.log(control);
	
	if (control) {
		
		if (control instanceof FormControl) {
			
			if (control.untouched === true) {
				console.log('thang nao untouched', control);
				console.log('thang nao untouched', control.untouched);
				return false;
			}
		} else if (control instanceof FormGroup) {
			const controls = control.controls;
			for (let key in controls) {
				console.log('key', key);
				if (controls.hasOwnProperty(key)) {
					const nextControl = controls[key];
					if (hasTouchedAll(nextControl) === false) {
						return false;
					}
				}
			}

		} else {
			console.log('go here', control);

		}

	} else {
		console.log('control is empty');
		return null;
	}
	return true;
}
