import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from 'app/interfaces/banner-content-2';
import { IFormData } from 'app/interfaces/form-data';
import { StoreFormDataService } from 'app/services/store-form-data/store-form-data.service';

@Component({
	selector: 'app-mua-online-buoc4',
	templateUrl: './mua-online-buoc4.component.html',
	styleUrls: ['./mua-online-buoc4.component.sass']
})
export class MuaOnlineBuoc4Component implements OnInit, AfterViewInit {
	isAgree = false;
	data: IFormData;
	constructor(
		private router: Router,
		private storeData: StoreFormDataService
	) {
		this.data = this.storeData.getData();
	}
	bannerContent: BannerContent_2 = {
		title: 'Hoàn Tất Hồ Sơ',
		subTitle: 'Các bước mua online'
	};
	nextStep(): void {
		if (this.isAgree) {
			if (this.storeData.setValue('finalAgree', this.isAgree)){
				this.router.navigate(['/mua-online/mua-online-buoc5']);
			}
		}
	}
	backStep(): void {
		this.router.navigate(['/mua-online/mua-online-buoc3-nhap-otp']);

	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		// fill the existed information
		this.isAgree = this.storeData.getData().finalAgree === null ? false : this.storeData.getData().finalAgree;

		// setTimeout(() => {
		// 	// use setTimeout to force this following snippet work in the next tick 
		// 	// because template driven form is asyn
		// 	temForm['check'].setValue(filledForm.hinhThucThanhToan);
		// }, 0);
	}

}
