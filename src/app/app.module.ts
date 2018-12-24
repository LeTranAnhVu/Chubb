import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

/// Bootstrap /////////
import {NgbCarouselModule, NgbModalModule, NgbDropdownModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './lib/header/header.component';
import { FooterComponent } from './lib/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
//////////////////////
@NgModule({
  declarations: [
    AppComponent , 
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbModalModule,
    NgbDropdownModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
