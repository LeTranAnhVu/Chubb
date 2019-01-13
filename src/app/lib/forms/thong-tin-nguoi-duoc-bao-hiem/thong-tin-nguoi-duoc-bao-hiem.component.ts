import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { StoreFormDataService } from 'app/services/store-form-data/store-form-data.service';

@Component({
	selector: 'app-thong-tin-nguoi-duoc-bao-hiem',
	templateUrl: './thong-tin-nguoi-duoc-bao-hiem.component.html',
	styleUrls: ['./thong-tin-nguoi-duoc-bao-hiem.component.sass']
})
export class ThongTinNguoiDuocBaoHiemComponent implements OnInit, AfterViewInit {
	@ViewChild('temForm') form;
	// properties
	private filledForm: any;
	constructor(
		private storeData: StoreFormDataService
	) {
		this.filledForm = storeData.getData().nguoiDuocBH;
		console.log('duoc bh');
		console.log(this.filledForm);
	}


	log(form) {
		console.log('after changed', form);
	}
	ngOnInit() {
	}

	collectData() {
		let temData = {
			hoTen: this.form.value.hoTen,
			giayTo: this.form.value.giayTo,
		};

		if (this.storeData.setValue('nguoiDuocBH', temData)) {
			// saved data success
			return true;

		} else {
			// error
			console.log('error in store form in nguoiDuocBH');
			return false;
		}

	}
	ngAfterViewInit() {
		// fill the existed information
		let temForm = this.form.controls;
		let filledForm = this.storeData.getData().nguoiDuocBH;

		setTimeout(() => {
			// use setTimeout to force this following snippet work in the next tick 
			// because template driven form is asyn
			temForm['hoTen'].setValue(filledForm.hoTen);
			temForm['giayTo'].controls['loaiGiayTo'].setValue(filledForm.giayTo.loaiGiayTo);
			temForm['giayTo'].controls['noiCap'].setValue(filledForm.giayTo.noiCap);
			temForm['giayTo'].controls['ngayCap'].setValue(filledForm.giayTo.ngayCap);
			
		}, 0);
	}


}

