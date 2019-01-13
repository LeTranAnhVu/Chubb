import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ICalendar } from 'app/interfaces/calendar';
import { CalendarModel } from 'app/models/calendar-model';
import { StoreFormDataService } from 'app/services/store-form-data/store-form-data.service';
@Component({
	selector: 'app-thong-tin-ben-mua-bao-hiem',
	templateUrl: './thong-tin-ben-mua-bao-hiem.component.html',
	styleUrls: ['./thong-tin-ben-mua-bao-hiem.component.sass']
})
export class ThongTinBenMuaBaoHiemComponent implements OnInit, AfterViewInit {

	@ViewChild('temForm') form;
	calendarModel: ICalendar;
	constructor(private storeData: StoreFormDataService) {
		this.calendarModel = new CalendarModel().getCalendar();
	}

	ngOnInit() {
	}

	collectData() {
		let temData = {
			hoTen: this.form.value.hoTenNguoiMua,
			ngaySinh: `${this.form.value.ngaySinh.year}-${this.form.value.ngaySinh.month}-${this.form.value.ngaySinh.day}`,
			gioiTinh: this.form.value.gioiTinh,
			giayTo: this.form.value.giayTo,
		};

		if (this.storeData.setValue('nguoiMuaBH', temData)) {
			// saved data success
			return true;
		} else {
			// error
			console.log('error in store form in nguoiMuaBH');
			return false;
		}

	}
	ngAfterViewInit() {
		// fill the existed information
		let temForm = this.form.controls;
		let filledForm = this.storeData.getData().nguoiMuaBH;
		
		setTimeout(() => {
			// use setTimeout to force this following snippet work in the next tick 
			// because template driven form is asyn
			temForm['hoTenNguoiMua'].setValue(filledForm.hoTen);
			temForm['gioiTinh'].setValue(filledForm.gioiTinh);

			const [year, month, day] = filledForm.ngaySinh.split('-');
			temForm['ngaySinh'].controls['day'].setValue(day);
			temForm['ngaySinh'].controls['month'].setValue(month);
			temForm['ngaySinh'].controls['year'].setValue(year);

			temForm['giayTo'].controls['loaiGiayTo'].setValue(filledForm.giayTo.loaiGiayTo);
			temForm['giayTo'].controls['noiCap'].setValue(filledForm.giayTo.noiCap);
			temForm['giayTo'].controls['ngayCap'].setValue(filledForm.giayTo.ngayCap);
		}, 0);
	}


}
