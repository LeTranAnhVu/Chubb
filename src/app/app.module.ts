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
import { Buyonline5Component } from './pages/buyonline5/buyonline5.component';
import { Buyonline6Component } from './pages/buyonline6/buyonline6.component';
import { Buyonline3Component } from './pages/buyonline3/buyonline3.component';
import { TitleComponent } from './lib/title/title.component';
//////////////////////
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProductComponent,
    Buyonline4Component,
    Buyonline5Component,
    Buyonline6Component,
    Buyonline3Component,
    TitleComponent],
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
