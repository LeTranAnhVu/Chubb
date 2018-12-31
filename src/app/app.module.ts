import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/// Plugin /////////
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


// Pages and Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Banner01Component } from './lib/banner/banner01/banner01.component';
// các components
import { Banner02Component } from './lib/banner/banner02/banner02.component';
import { DieuKhoanBHComponent } from './lib/dieu-khoan-bh/dieu-khoan-bh.component';
// footer
import { FooterComponent } from './lib/footer/footer.component';
import { ButtonsComponent } from './lib/forms/buttons/buttons.component';
import { ThongTinBenMuaBaoHiemComponent } from './lib/forms/thong-tin-ben-mua-bao-hiem/thong-tin-ben-mua-bao-hiem.component';
import { ThongTinLienLacComponent } from './lib/forms/thong-tin-lien-lac/thong-tin-lien-lac.component';
import { ThongTinNguoiDuocBaoHiemComponent } from './lib/forms/thong-tin-nguoi-duoc-bao-hiem/thong-tin-nguoi-duoc-bao-hiem.component';
// header
import { HeaderComponent } from './lib/header/header.component';
import { HomeabvantagesComponent } from './lib/homeabvantages/homeabvantages.component';
import { HomebannerComponent } from './lib/homebanner/homebanner.component';
import { HomeproductComponent } from './lib/homeproduct/homeproduct.component';
import { HomesupportComponent } from './lib/homesupport/homesupport.component';
// các bước mua online
import { MuaOnlineBuoc1Component } from './lib/muaonline/mua-online-buoc1/mua-online-buoc1.component';
import { MuaOnlineBuoc2Component } from './lib/muaonline/mua-online-buoc2/mua-online-buoc2.component';
import { MuaOnlineBuoc3NhapOtpComponent } from './lib/muaonline/mua-online-buoc3-nhap-otp/mua-online-buoc3-nhap-otp.component';
import { MuaOnlineBuoc3Component } from './lib/muaonline/mua-online-buoc3/mua-online-buoc3.component';
import { MuaOnlineBuoc4Component } from './lib/muaonline/mua-online-buoc4/mua-online-buoc4.component';
import { MuaOnlineBuoc5Component } from './lib/muaonline/mua-online-buoc5/mua-online-buoc5.component';
import { MuaOnlineBuoc6HoanthanhComponent } from './lib/muaonline/mua-online-buoc6-hoanthanh/mua-online-buoc6-hoanthanh.component';
import { ProductDetailComponent } from './lib/product-detail/product-detail.component';
import { ProductItemComponent } from './lib/product-item/product-item.component';
import { AboutComponent } from './pages/about/about.component';
import { GiaiquyetquyenloiBHComponent } from './pages/giaiquyetquyenloi-bh/giaiquyetquyenloi-bh.component';
// các trang
import { HomeComponent } from './pages/home/home.component';
import { MuaOnlineComponent } from './pages/mua-online/mua-online.component';
import { ProductComponent } from './pages/product/product.component';













@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		AboutComponent,
		ProductComponent,


		ProductItemComponent,
		ProductDetailComponent,
		HomeComponent,
		HomebannerComponent,
		HomeabvantagesComponent,
		HomesupportComponent,
		HomeproductComponent,

		// forms components
		MuaOnlineBuoc1Component,
		MuaOnlineBuoc2Component,
		MuaOnlineBuoc3Component,
		MuaOnlineBuoc3NhapOtpComponent,
		MuaOnlineBuoc4Component,
		MuaOnlineBuoc5Component,
		MuaOnlineBuoc6HoanthanhComponent,

		ThongTinNguoiDuocBaoHiemComponent,
		ThongTinBenMuaBaoHiemComponent,
		ThongTinLienLacComponent,
		GiaiquyetquyenloiBHComponent,
		DieuKhoanBHComponent,
		Banner01Component,
		Banner02Component,
		MuaOnlineComponent,
		ButtonsComponent,
		MuaOnlineBuoc3NhapOtpComponent,
	],


	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule, ReactiveFormsModule, HttpClientModule,
		NgbModule,
		OwlDateTimeModule,
		OwlNativeDateTimeModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
