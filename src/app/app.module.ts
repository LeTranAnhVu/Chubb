import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
/// Bootstrap /////////
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './lib/footer/footer.component';
import { ThongTinBenMuaBaoHiemComponent } from './lib/forms/thong-tin-ben-mua-bao-hiem/thong-tin-ben-mua-bao-hiem.component';
import { ThongTinLienLacComponent } from './lib/forms/thong-tin-lien-lac/thong-tin-lien-lac.component';
import { ThongTinNguoiDuocBaoHiemComponent } from './lib/forms/thong-tin-nguoi-duoc-bao-hiem/thong-tin-nguoi-duoc-bao-hiem.component';
import { HeaderComponent } from './lib/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { Buyonline4Component } from './pages/buyonline4/buyonline4.component';
import { MuaOnlineBuoc1Component } from './pages/mua-online-buoc1/mua-online-buoc1.component';
import { MuaOnlineBuoc2Component } from './pages/mua-online-buoc2/mua-online-buoc2.component';
import { ProductComponent } from './pages/product/product.component';





//////////////////////
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProductComponent,
    Buyonline4Component,
    MuaOnlineBuoc1Component,
    MuaOnlineBuoc2Component,
    ThongTinNguoiDuocBaoHiemComponent,
    ThongTinBenMuaBaoHiemComponent,
    ThongTinLienLacComponent,
    ],
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
