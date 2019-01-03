import { Component, Input, OnInit } from '@angular/core';
import { BannerContent } from 'app/interfaces/banner-content';


@Component({
  selector: 'app-banner01',
  templateUrl: './banner01.component.html',
  styleUrls: ['./banner01.component.sass']
})
export class Banner01Component implements OnInit {
  @Input() content: BannerContent;
  constructor() { }
  ngOnInit() {
  }
}
