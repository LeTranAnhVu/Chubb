import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homebanner',
  templateUrl: './homebanner.component.html',
  styleUrls: ['./homebanner.component.sass'],
  providers: [NgbCarouselConfig]
})
export class HomebannerComponent implements OnInit {
  images = ['../../../assets/img/home/home_slider_1.png', '../../../assets/img/home/home_slider_2.jpg', '../../../assets/img/home/home_slider_3.jpg'];
  ngOnInit() {
  }
  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }
}
