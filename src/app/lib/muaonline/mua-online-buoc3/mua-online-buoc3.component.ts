import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BannerContent_2 } from 'app/interfaces/banner-content-2';
import { StoreFormDataService } from 'app/services/store-form-data/store-form-data.service';



const contents = [
	`Người được Bảo hiểm có bao giờ bị hoặc đang được theo dõi do nghi ngờ bị: ung thư bất kỳ cơ quan/nội
	tạng nào; nổi u/hạch ở cổ, vú, nách, bẹn; bị polyp, u, nhân hoặc nang bất kỳ cơ quan/nội tạng nào; hoặc
	bệnh gan, viêm gan?`,
	`Trong vòng 05 năm vừa qua, Người được Bảo hiểm có đang được theo dõi/được đề nghị theo dõi do có kết
	quả bất thường khi xét nghiệm máu, xét nghiệm nước tiểu, xét nghiệm phân, siêu âm, xét nghiệm tế bào cổ
	tử cung (Pap smear), chụp nhũ ảnh, nội soi, chụp cắt lớp (CT scan), chụp cộng hưởng từ hạt nhân (MRI)
	hoặc có bất thường khi thăm khám tuyến tiền liệt không?`,
	`Người được Bảo hiểm có bao giờ bị hoặc được chẩn đoán hoặc điều trị bệnh lý bẩm sinh hoặc bệnh lý về
	di truyền không ?`,
	`Người được Bảo hiểm đã có hoặc đang tham gia Sản phẩm Bảo hiểm hỗ trợ điều trị ung thư - C Care
	và/hoặc Quyền lợi bảo hiểm hỗ trợ tài chính toàn diện điều trị bệnh ung thư của Chubb Life không?`

]

@Component({
	selector: 'app-mua-online-buoc3',
	templateUrl: './mua-online-buoc3.component.html',
	styleUrls: ['./mua-online-buoc3.component.sass']
})
export class MuaOnlineBuoc3Component implements OnInit, AfterViewInit {
	@ViewChild('temForm') form;

	private nextStepIsClicked = false;
	isFormValid: boolean;
	contents = contents;
	constructor(
		private router: Router,
		private storeData: StoreFormDataService
		) { }
	bannerContent: BannerContent_2 = {
		title: 'Thẩm Định',
		subTitle: 'Các bước mua online'
	};


	onChange() {
		console.log('in on changed');
		console.log(this.form);
		const object = this.form.value;
		for (const key in object) {
			if (object.hasOwnProperty(key)) {
				if (object[key] !== 0) {
					this.isFormValid = false;
					return;
				} else {
					this.isFormValid = true;
				}
			}
		}

	}
	nextStep(): void {
		if (this.nextStepIsClicked === false) {
			this.nextStepIsClicked = true;
		}
		console.log('buoc 3');
		console.log(this.form);
		
		if (this.isFormValid) {
			// store data
			if(this.storeData.setValue('cacDieuKhoanThoaYeuCau', true)){
				// saved data success
				this.router.navigate(['/mua-online/mua-online-buoc3-nhap-otp']);
			}
			
		}
	}
	backStep(): void {
		this.router.navigate(['/mua-online/mua-online-buoc2']);

	}

	ngOnInit() {
	}
	ngAfterViewInit() {
		// fill the existed information
		let temForm = this.form.controls;
		// let filledForm = this.storeData.getData().cacDieuKhoanThoaYeuCau;
		
		setTimeout(() => {
			// use setTimeout to force this following snippet work in the next tick 
			// because template driven form is asyn
			temForm['check0'].setValue(0);
			temForm['check1'].setValue(0);
			temForm['check2'].setValue(0);
			temForm['check3'].setValue(0);
			this.isFormValid = true;
			
		}, 0);
	}
}
