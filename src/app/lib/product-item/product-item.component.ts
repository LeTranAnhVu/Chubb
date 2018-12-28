import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent implements OnInit {
  // product = [product] home
  @Input() product: any;
  @Input() index: any;
  @Output() whichDetail = new EventEmitter<any>();
  // EventEmitter<any> lắng nghe bất cứ gì

  seeMoreHandler() {
    // add class active

    // emit là phát tín hiệu khi bắt được
    this.whichDetail.emit([this.product.detail, this.index]);
  }

  constructor() { }

  ngOnInit() {
  }

}
