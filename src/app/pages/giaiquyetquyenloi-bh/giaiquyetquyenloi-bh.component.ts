import { Component, OnInit } from '@angular/core';
import { BannerContent } from '../../interfaces/banner-content';
@Component({
  selector: 'app-giaiquyetquyenloi-bh',
  templateUrl: './giaiquyetquyenloi-bh.component.html',
  styleUrls: ['./giaiquyetquyenloi-bh.component.sass']
})
export class GiaiquyetquyenloiBHComponent implements OnInit {

  constructor() { }
  bannerContent: BannerContent = {
    img: '../../../assets/img/thutuc/thutuc_banner.jpg',
    titles: ['Thủ tục Thanh toán Quyền Lợi', 'Bảo hiểm Nhân Thọ']
  };
  ngOnInit() {
  }

}
