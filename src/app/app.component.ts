import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  title = 'app';
  images = ['../../../assets/img/home/home_slider_1.png', '../../../assets/img/home/home_slider_2.jpg', '../../../assets/img/home/home_slider_3.jpg'];
  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
      config.showNavigationArrows = true;
      config.showNavigationIndicators = false;
  }
}
