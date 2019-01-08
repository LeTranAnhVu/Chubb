import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreFormDataService } from 'app/services/store-form-data/store-form-data.service';

@Component({
	selector: 'app-thong-tin-nguoi-duoc-bao-hiem',
	templateUrl: './thong-tin-nguoi-duoc-bao-hiem.component.html',
	styleUrls: ['./thong-tin-nguoi-duoc-bao-hiem.component.sass']
})
export class ThongTinNguoiDuocBaoHiemComponent implements OnInit {
	@ViewChild('temForm') form;
	// properties
	private filledForm: any;
	private nextStepIsClicked = false;
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

}

