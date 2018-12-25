import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-accordion-basic',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor() { }
  banner = '../../../assets/img/about/about_banner.png';
  ngOnInit() {
  }

}
