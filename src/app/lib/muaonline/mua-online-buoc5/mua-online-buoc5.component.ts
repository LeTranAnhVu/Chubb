import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from 'app/interfaces/banner-content-2';
import { StoreFormDataService } from 'app/services/store-form-data/store-form-data.service';

@Component({
	selector: 'app-mua-online-buoc5',
	templateUrl: './mua-online-buoc5.component.html',
	styleUrls: ['./mua-online-buoc5.component.sass']
})
export class MuaOnlineBuoc5Component implements OnInit, AfterViewInit {
	@ViewChild('temForm') form;
	constructor(
		private router: Router,
		private storeData: StoreFormDataService
	) { }
	bannerContent: BannerContent_2 = {
		title: 'Phương Thức Thanh Toán',
		subTitle: 'Các bước mua online'
	};
	nextStep(): void {

		if (this.form.valid) {
			let thanhToan = this.form.value['check'];
			if (this.storeData.setValue('hinhThucThanhToan', thanhToan)) {
				this.router.navigate(['/mua-online/mua-online-buoc6-hoanthanh']);
			}
		}
	}
	backStep(): void {
		this.router.navigate(['/mua-online/mua-online-buoc4']);
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		// fill the existed information
		let temForm = this.form.controls;
		let filledForm = this.storeData.getData();
		
		setTimeout(() => {
			// use setTimeout to force this following snippet work in the next tick 
			// because template driven form is asyn
			temForm['check'].setValue(filledForm.hinhThucThanhToan);
		}, 0);
	}

}
