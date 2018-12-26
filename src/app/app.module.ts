import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

/// Bootstrap /////////
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './lib/header/header.component';
import { FooterComponent } from './lib/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { Buyonline4Component } from './pages/buyonline4/buyonline4.component';
import { ProductItemComponent } from './lib/product-item/product-item.component';
import { ProductDetailComponent } from './lib/product-detail/product-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { HomebannerComponent } from './lib/homebanner/homebanner.component';
import { HomeabvantagesComponent } from './lib/homeabvantages/homeabvantages.component';
import { HomesupportComponent } from './lib/homesupport/homesupport.component';
import { HomeproductComponent } from './lib/homeproduct/homeproduct.component';
//////////////////////
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProductComponent,
    Buyonline4Component,
    ProductItemComponent,
    ProductDetailComponent,
    HomeComponent,
    HomebannerComponent,
    HomeabvantagesComponent,
    HomesupportComponent,
    HomeproductComponent],
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
