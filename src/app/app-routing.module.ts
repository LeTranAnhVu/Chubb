import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../app/pages/about/about.component';
import { ProductComponent } from '../app/pages/product/product.component';
import { MuaOnlineBuoc3NhapOTPComponent } from './pages/mua-online-buoc3-nhap-otp/mua-online-buoc3-nhap-otp.component';
import { MuaOnlineBuoc4Component } from './pages/mua-online-buoc4/mua-online-buoc4.component';
import { MuaOnlineBuoc5Component } from './pages/mua-online-buoc5/mua-online-buoc5.component';
import { MuaOnlineBuoc6HoanthanhComponent } from './pages/mua-online-buoc6-hoanthanh/mua-online-buoc6-hoanthanh.component';





const routes: Routes = [
    {path: 'about' , component: AboutComponent},
    {path: 'product' , component: ProductComponent},
    {path: 'mua-online-buoc3-nhap-otp' , component: MuaOnlineBuoc3NhapOTPComponent},
    {path: 'mua-online-buoc4' , component: MuaOnlineBuoc4Component},
    {path: 'mua-online-buoc5' , component: MuaOnlineBuoc5Component},
    {path: 'mua-online-buoc6-hoanthanh' , component: MuaOnlineBuoc6HoanthanhComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }