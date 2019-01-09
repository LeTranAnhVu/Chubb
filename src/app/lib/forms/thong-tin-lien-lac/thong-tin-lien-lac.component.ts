import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { StoreFormDataService } from 'app/services/store-form-data/store-form-data.service';

@Component({
	selector: 'app-thong-tin-lien-lac',
	templateUrl: './thong-tin-lien-lac.component.html',
	styleUrls: ['./thong-tin-lien-lac.component.sass']
})
export class ThongTinLienLacComponent implements OnInit, AfterViewInit {
	@ViewChild('temForm') form;
	constructor(private storeData: StoreFormDataService) { }

	ngOnInit() {
	}

	collectData() {
		let temData = {
			diaChi: `${this.form.value.diaChi.diaChi01};${this.form.value.diaChi.diaChi02};${this.form.value.diaChi.diaChi03}`,
			soDienThoai: this.form.value.soDienThoai,
			email: this.form.value.email
		};

		if (this.storeData.setValue('thongTinLienLac', temData)) {
			// saved data success
			return true;

		} else {
			// error
			console.log('error in store form in thong tin lien lac');
			return false;
		}

	}


	ngAfterViewInit() {
		// fill the existed information
		let temForm = this.form.controls;
		let filledForm = this.storeData.getData().thongTinLienLac;
		
		setTimeout(() => {
			// use setTimeout to force this following snippet work in the next tick 
			// because template driven form is asyn
			const [dc1, dc2, dc3] = filledForm.diaChi.split(';');
			temForm['diaChi'].controls['diaChi01'].setValue(dc1);
			temForm['diaChi'].controls['diaChi02'].setValue(dc2);
			temForm['diaChi'].controls['diaChi03'].setValue(dc3);
			temForm['soDienThoai'].setValue(filledForm.soDienThoai);
			temForm['email'].setValue(filledForm.email);
		}, 0);
	}

}
