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
				hoTen: 'Lê Trần Anh Vũ',
				ngaySinh: '1995-02-15',
				gioiTinh: '1',
				dinhKiDongPhi: '2',
				isVietNamese: true,
				isAgreePolicy: true,
				giayTo: {
					loaiGiayTo: '2',
					noiCap: 'Tp Hồ Chí Minh',
					ngayCap: '2010-12-30'
				}
			},
			nguoiMuaBH: {
				hoTen: 'phạm thi thu trang',
				ngaySinh: '1998-02-05',
				gioiTinh: '2',
				giayTo: {
					loaiGiayTo: '1',
					noiCap: 'bến tre',
					ngayCap: '2013-04-12'
				}

			},
			thongTinLienLac: {
				diaChi: '112/85/9 ĐƯỜNG Thống Nhất; Phường 15, Quận Gò Vấp; Tp Hồ Chí Minh',
				soDienThoai: '0934005431',
				email: 'trangthupham_02051998@gmail.com'
			},
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
