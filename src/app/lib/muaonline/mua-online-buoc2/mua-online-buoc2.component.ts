import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from 'app/interfaces/banner-content-2';
import { ThongTinBenMuaBaoHiemComponent } from '../../forms/thong-tin-ben-mua-bao-hiem/thong-tin-ben-mua-bao-hiem.component';
import { ThongTinLienLacComponent } from '../../forms/thong-tin-lien-lac/thong-tin-lien-lac.component';
import { ThongTinNguoiDuocBaoHiemComponent } from '../../forms/thong-tin-nguoi-duoc-bao-hiem/thong-tin-nguoi-duoc-bao-hiem.component';
@Component({
	selector: 'app-mua-online-buoc2',
	templateUrl: './mua-online-buoc2.component.html',
	styleUrls: ['./mua-online-buoc2.component.sass']
})
export class MuaOnlineBuoc2Component implements OnInit {

	@ViewChild(ThongTinNguoiDuocBaoHiemComponent) form1;
	@ViewChild(ThongTinBenMuaBaoHiemComponent) form2;
	@ViewChild(ThongTinLienLacComponent) form3;

	private nextStepIsClicked = false;
	isAllFormsValid: boolean;
	constructor(private router: Router) { }
	bannerContent: BannerContent_2 = {
		title: 'Thông Tin Khách Hàng',
		subTitle: 'Các bước mua online'
	};
	nextStep(): void {

		if (!this.nextStepIsClicked) {
			this.nextStepIsClicked = true;
		}


		// validate
		if (this.form1.form.valid && this.form2.form.valid && this.form3.form.valid) {
			// collect data
			if (this.form1.collectData() && this.form2.collectData() && this.form3.collectData()) {
				// saved data success
				// navigate to next step
				this.isAllFormsValid = true;
				this.router.navigate(['/mua-online/mua-online-buoc3']);
			}
		} else {
			this.isAllFormsValid = false;
		}
	}
	backStep(): void {
		this.router.navigate(['/mua-online/mua-online-buoc1']);

	}

	ngOnInit() {
	}
	

}
