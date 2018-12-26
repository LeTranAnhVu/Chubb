import { Component, Input, OnInit } from '@angular/core';
import { BannerContent_2 } from '../../../interfaces/banner-content-2';
@Component({
  selector: 'app-banner02',
  templateUrl: './banner02.component.html',
  styleUrls: ['./banner02.component.sass']
})
export class Banner02Component implements OnInit {
  @Input() content: BannerContent_2;
  constructor() { }

  ngOnInit() {
  }

}
