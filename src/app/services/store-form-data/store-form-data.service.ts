import { Injectable } from '@angular/core';
import { IFormData } from '../../interfaces/form-data';
@Injectable({
	providedIn: 'root'
})



export class StoreFormDataService {
	private data: IFormData;
	constructor() {
		this.data = {
			nguoiDuocBH: {
				hoTen: '',
				ngaySinh: '',
				gioiTinh: '',
				dinhKiDongPhi: '',
				isVietNamese: true,
				isAgreePolicy: false,
				giayTo: {
					loaiGiayTo: '',
					noiCap: '',
					ngayCap: ''
				}
			},
			nguoiMuaBH: {
				hoTen: '',
				ngaySinh: '',
				gioiTinh: '',
				giayTo: {
					loaiGiayTo: '',
					noiCap: '',
					ngayCap: ''
				}

			},
			thongTinLienLac: {
				diaChi: '',
				soDienThoai: '',
				email: ''
			},
			cacDieuKhoanThoaYeuCau: null,
			finalAgree: null,
			hinhThucThanhToan: ''
		};
	}
	setValue(key, value): boolean {
		if (this.data.hasOwnProperty(key)) {
			if (typeof (value) === 'object') {
				for (const k in value) {
					if (this.data[key].hasOwnProperty(k)) {
						console.log('saved data success');
						let val = value[k];
						this.data[key][k] = val;
					} else {
						console.log('inner key invalid');
						return false;
					}
				}
			} else {
				this.data[key] = value;
			}
			return true;
		} else {
			console.log('key invalid');
			return false;
		}
	}

	getData() {
		return this.data;
	}
}
