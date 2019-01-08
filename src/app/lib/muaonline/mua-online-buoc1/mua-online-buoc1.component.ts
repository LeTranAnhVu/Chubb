import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from 'app/interfaces/banner-content-2';
import { ICalendar } from 'app/interfaces/calendar';
import { CalendarModel } from 'app/models/calendar-model';
import { StoreFormDataService } from 'app/services/store-form-data/store-form-data.service';


@Component({
	selector: 'app-mua-online-buoc1',
	templateUrl: './mua-online-buoc1.component.html',
	styleUrls: ['./mua-online-buoc1.component.sass']
})

export class MuaOnlineBuoc1Component implements OnInit, AfterViewInit {
	// used viewchild to get the ngForm from this component's html
	@ViewChild('temForm') form;

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


	constructor(
		private router: Router,
		private storeData: StoreFormDataService,
	) {
		this.calendarModel = new CalendarModel().getCalendar();

	}
	// methods
	nextStep(): void {

		if (this.nextStepIsClicked === false) {
			this.nextStepIsClicked = true;
		}
		console.log(this.form);

		if ((<any>this.form).valid) {
			// collect data
			let temData = {
				ngaySinh: `${this.form.value.ngaySinh.year}-${this.form.value.ngaySinh.month}-${this.form.value.ngaySinh.day}`,
				dinhKiDongPhi: this.form.value.dinhKiDongPhi,
				gioiTinh: this.form.value.gioiTinh,
				isVietNamese: this.form.value.isVietNamese,
				isAgreePolicy: this.form.value.isAgreePolicy
			}
			if (this.storeData.setValue('nguoiDuocBH', temData)) {
				// saved data success
				// navigate to next step
				this.router.navigate(['/mua-online/mua-online-buoc2']);
			} else {
				// error
			}
		}
	}
	backStep(): void {
		this.router.navigate(['/mua-online/mua-online-buoc1']);

	}

	ngOnInit() {

	}

	ngAfterViewInit() {
		// fill the existed information
		let temForm = this.form.controls;
		let filledForm = this.storeData.getData().nguoiDuocBH;
		
		setTimeout(() => {
			// use setTimeout to force this following snippet work in the next tick 
			// because template driven form is asyn
			temForm['dinhKiDongPhi'].setValue(filledForm.dinhKiDongPhi);
			temForm['gioiTinh'].setValue(filledForm.gioiTinh);
			temForm['isAgreePolicy'].setValue(filledForm.isAgreePolicy);

			const [year, month, day] = filledForm.ngaySinh.split('-');
			temForm['ngaySinh'].controls['day'].setValue(day);
			temForm['ngaySinh'].controls['month'].setValue(month);
			temForm['ngaySinh'].controls['year'].setValue(year);
		}, 0);
	}

}	
