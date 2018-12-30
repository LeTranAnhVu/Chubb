import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../app/pages/about/about.component';
import { ProductComponent } from '../app/pages/product/product.component';
import { MuaOnlineBuoc1Component } from './lib/muaonline/mua-online-buoc1/mua-online-buoc1.component';
import { MuaOnlineBuoc2Component } from './lib/muaonline/mua-online-buoc2/mua-online-buoc2.component';
import { MuaOnlineBuoc3NhapOtpComponent } from './lib/muaonline/mua-online-buoc3-nhap-otp/mua-online-buoc3-nhap-otp.component';
import { MuaOnlineBuoc3Component } from './lib/muaonline/mua-online-buoc3/mua-online-buoc3.component';
import { MuaOnlineBuoc4Component } from './lib/muaonline/mua-online-buoc4/mua-online-buoc4.component';
import { MuaOnlineBuoc5Component } from './lib/muaonline/mua-online-buoc5/mua-online-buoc5.component';
import { MuaOnlineBuoc6HoanthanhComponent } from './lib/muaonline/mua-online-buoc6-hoanthanh/mua-online-buoc6-hoanthanh.component';
import { GiaiquyetquyenloiBHComponent } from './pages/giaiquyetquyenloi-bh/giaiquyetquyenloi-bh.component';
import { HomeComponent } from './pages/home/home.component';
import { MuaOnlineComponent } from './pages/mua-online/mua-online.component';








const routes: Routes = [

	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'product', component: ProductComponent },
	{ path: 'giai-quyet-quyen-loi-BH', component: GiaiquyetquyenloiBHComponent },

	// form
	{
		path: 'mua-online',
		component: MuaOnlineComponent,
		children: [
			{ path: '', redirectTo: 'mua-online-buoc1', pathMatch: 'full' },
			{ path: 'mua-online-buoc1', component: MuaOnlineBuoc1Component },
			{ path: 'mua-online-buoc2', component: MuaOnlineBuoc2Component },
			{ path: 'mua-online-buoc3', component: MuaOnlineBuoc3Component },
			{ path: 'mua-online-buoc3-nhap-otp', component: MuaOnlineBuoc3NhapOtpComponent },
			{ path: 'mua-online-buoc4', component: MuaOnlineBuoc4Component },
			{ path: 'mua-online-buoc5', component: MuaOnlineBuoc5Component },
			{ path: 'mua-online-buoc6-hoanthanh', component: MuaOnlineBuoc6HoanthanhComponent }
		]
	},
	// { path: 'mua-online-buoc1', component: MuaOnlineBuoc1Component },
	// { path: 'mua-online-buoc2', component: MuaOnlineBuoc2Component },
	// { path: 'mua-online-buoc3', component: MuaOnlineBuoc3Component },
	// { path: 'mua-online-buoc3-nhap-otp', component: MuaOnlineBuoc3NhapOTPComponent },
	// { path: 'mua-online-buoc4', component: MuaOnlineBuoc4Component },
	// { path: 'mua-online-buoc5', component: MuaOnlineBuoc5Component },
	// { path: 'mua-online-buoc6-hoanthanh', component: MuaOnlineBuoc6HoanthanhComponent },


	{ path: '**', redirectTo: '', pathMatch: 'full' },

];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
