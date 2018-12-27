import { Component, Input, OnInit } from '@angular/core';
import { ACTIVE_INDEX } from '@angular/core/src/render3/interfaces/container';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  @Input() detail;
  @Input() color;
  @Input() active;
  
  constructor() { }
  ngOnInit() {
  }

}
