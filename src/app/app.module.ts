import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
/// Bootstrap /////////
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './lib/footer/footer.component';
import { HeaderComponent } from './lib/header/header.component';
import { TitleComponent } from './lib/title/title.component';
import { AboutComponent } from './pages/about/about.component';
import { MuaOnlineBuoc3NhapOTPComponent } from './pages/mua-online-buoc3-nhap-otp/mua-online-buoc3-nhap-otp.component';
import { MuaOnlineBuoc4Component } from './pages/mua-online-buoc4/mua-online-buoc4.component';
import { MuaOnlineBuoc5Component } from './pages/mua-online-buoc5/mua-online-buoc5.component';
import { MuaOnlineBuoc6HoanthanhComponent } from './pages/mua-online-buoc6-hoanthanh/mua-online-buoc6-hoanthanh.component';
import { ProductComponent } from './pages/product/product.component';





//////////////////////
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProductComponent,
    TitleComponent,
    MuaOnlineBuoc3NhapOTPComponent,
    MuaOnlineBuoc6HoanthanhComponent,
    MuaOnlineBuoc5Component,
    MuaOnlineBuoc4Component],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
