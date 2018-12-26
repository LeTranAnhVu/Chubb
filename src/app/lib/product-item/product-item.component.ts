import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  @Output() whichDetail = new EventEmitter<any>();

  seeMoreHandler() {
    this.whichDetail.emit(this.product.detail);
    console.log(this.product.detail);
    console.log('send detail success');
    // let productWrap = document.getElementsByClassName('product-detail-wrap');
  }
  
  constructor() { }

  ngOnInit() {
  }

}
