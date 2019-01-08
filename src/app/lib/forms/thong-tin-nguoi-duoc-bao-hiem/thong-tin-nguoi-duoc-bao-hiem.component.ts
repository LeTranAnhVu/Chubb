import { Component, OnInit } from '@angular/core';
import { StoreFormDataService } from 'app/services/store-form-data/store-form-data.service';

@Component({
	selector: 'app-thong-tin-nguoi-duoc-bao-hiem',
	templateUrl: './thong-tin-nguoi-duoc-bao-hiem.component.html',
	styleUrls: ['./thong-tin-nguoi-duoc-bao-hiem.component.sass']
})
export class ThongTinNguoiDuocBaoHiemComponent implements OnInit {

	// properties
	private filledForm: any;

	constructor(
		private storeData: StoreFormDataService
	) {
		this.filledForm = storeData.getData().nguoiDuocBH;
		
	 }
	



	ngOnInit() {
	}

}
