import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/// Plugin /////////
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// Pages and Components
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { Banner01Component } from 'app/lib/banner/banner01/banner01.component';
// các components
import { Banner02Component } from 'app/lib/banner/banner02/banner02.component';
import { DieuKhoanBHComponent } from 'app/lib/dieu-khoan-bh/dieu-khoan-bh.component';
// footer
import { FooterComponent } from 'app/lib/footer/footer.component';
import { ButtonsComponent } from 'app/lib/forms/buttons/buttons.component';
import { ThongTinBenMuaBaoHiemComponent } from 'app/lib/forms/thong-tin-ben-mua-bao-hiem/thong-tin-ben-mua-bao-hiem.component';
import { ThongTinLienLacComponent } from 'app/lib/forms/thong-tin-lien-lac/thong-tin-lien-lac.component';
import { ThongTinNguoiDuocBaoHiemComponent } from 'app/lib/forms/thong-tin-nguoi-duoc-bao-hiem/thong-tin-nguoi-duoc-bao-hiem.component';
// header
import { HeaderComponent } from 'app/lib/header/header.component';
import { HomeabvantagesComponent } from 'app/lib/homeabvantages/homeabvantages.component';
import { HomebannerComponent } from 'app/lib/homebanner/homebanner.component';
import { HomeproductComponent } from 'app/lib/homeproduct/homeproduct.component';
import { HomesupportComponent } from 'app/lib/homesupport/homesupport.component';
// các bước mua online
import { MuaOnlineBuoc1Component } from 'app/lib/muaonline/mua-online-buoc1/mua-online-buoc1.component';
import { MuaOnlineBuoc2Component } from 'app/lib/muaonline/mua-online-buoc2/mua-online-buoc2.component';
import { MuaOnlineBuoc3NhapOtpComponent } from 'app/lib/muaonline/mua-online-buoc3-nhap-otp/mua-online-buoc3-nhap-otp.component';
import { MuaOnlineBuoc3Component } from 'app/lib/muaonline/mua-online-buoc3/mua-online-buoc3.component';
// import {MuaOnlineBuoc3NhapOtpComponent } from 'app/lib/muaonline/mua-online-buoc3-nhap-otp/mua-online-buoc3-nhap-otp.component.ts';
import { MuaOnlineBuoc4Component } from 'app/lib/muaonline/mua-online-buoc4/mua-online-buoc4.component';
import { MuaOnlineBuoc5Component } from 'app/lib/muaonline/mua-online-buoc5/mua-online-buoc5.component';
import { MuaOnlineBuoc6HoanthanhComponent } from 'app/lib/muaonline/mua-online-buoc6-hoanthanh/mua-online-buoc6-hoanthanh.component';
import { ProductDetailComponent } from 'app/lib/product-detail/product-detail.component';
import { ProductItemComponent } from 'app/lib/product-item/product-item.component';
import { AboutComponent } from 'app/pages/about/about.component';
import { GiaiquyetquyenloiBHComponent } from 'app/pages/giaiquyetquyenloi-bh/giaiquyetquyenloi-bh.component';
// các trang
import { HomeComponent } from 'app/pages/home/home.component';
import { MuaOnlineComponent } from 'app/pages/mua-online/mua-online.component';
import { ProductComponent } from 'app/pages/product/product.component';
import { CustomTimeValidatorDirective } from './directives/custom-time-validator/custom-time-validator.directive';















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
		// MuaOnlineBuoc3NhapOTPComponent,
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
		CustomTimeValidatorDirective,
	],


	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule, ReactiveFormsModule, HttpClientModule,
		NgbModule,

		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
