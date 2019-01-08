import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
export class MuaOnlineBuoc2Component implements OnInit, AfterViewInit {
	@ViewChild(ThongTinNguoiDuocBaoHiemComponent) form1;
	@ViewChild(ThongTinBenMuaBaoHiemComponent) form2;
	@ViewChild(ThongTinLienLacComponent) form3;

	isAllFormsValid: boolean;
	constructor(private router: Router) { }
	bannerContent: BannerContent_2 = {
		title: 'Thông Tin Khách Hàng',
		subTitle: 'Các bước mua online'
	};
	nextStep(): void {
		console.log('in form 2');
		console.log('in form 2');
		console.log(this.form1.form.value);
		console.log(this.form2.form.value);
		console.log(this.form3.form.value);
		// console.log('not doing');
		if (this.form1.form.valid && this.form2.form.valid && this.form3.form.valid) {
			this.isAllFormsValid = true;
			this.router.navigate(['/mua-online/mua-online-buoc3']);
		} else {
			this.isAllFormsValid = false;
		}
	}
	backStep(): void {
		this.router.navigate(['/mua-online/mua-online-buoc1']);

	}

	ngOnInit() {
	}
	ngAfterViewInit() {
		// ExpressionChangedAfterItHasBeenCheckedError
		// console.log(this.form1.form.value);
		// console.log(this.form2.form.value);
		// console.log(this.form3.form.value);
		// if (this.form1.form.valid && this.form2.form.valid && this.form3.form.valid) {
		// 	this.isAllFormsValid = true;
		// } else {
		// 	this.isAllFormsValid = false;
		// }
	}

}
