export interface IFormData {
	nguoiDuocBH: {
		hoTen: string,
		ngaySinh: string,
		gioiTinh: string,
		dinhKiDongPhi: string,
		isVietNamese: boolean,
		isAgreePolicy: boolean,
		giayTo: {
			loaiGiayTo: string,
			noiCap: string,
			ngayCap: string
		}
	};
	nguoiMuaBH: {
		hoTen: string,
		ngaySinh: string,
		gioiTinh: string,
		giayTo: {
			loaiGiayTo: string,
			noiCap: string,
			ngayCap: string
		}

	};
	thongTinLienLac: {
		diaChi: string
		soDienThoai: string,
		email: string
	};
	cacDieuKhoanThoaYeuCau: boolean;
	finalAgree: boolean;
	hinhThucThanhToan: string;
}
