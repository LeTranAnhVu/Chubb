import { Component } from '@angular/core';
interface IProduct {
  img: string;
  title: string;
  price: string;
  description: string;
  detail: IProductDetail;
}

interface IProductDetail {
  title: string;
  description: string;
  contents: string[];
}

let productsMockup: IProduct[] = [
  {
    img: '../../assets/img/home/home_product_1.jpg',
    title: 'C Care – Lựa chọn Cơ bản',
    price: '200 triệu đồng',
    description: 'Với mức phí chỉ từ 450 đồng/ngày, bạn sẽ được bảo vệ lên đến 5 năm trước những hiểm họa rình rập bởi bệnh ung thư.',
    detail: {
      title: 'Thông tin về gói sản phẩm:',
      description: 'Với mức phí chỉ từ 600 đồng/ngày, bạn sẽ được bảo vệ lên đến 5 năm trước những hiểm họa rình rập bởi bệnh ung thư.',
      contents: [
        'bao hiem 1',
        'Được chi trả lên đến 200 triệu đồng trước rủi ro bệnh ung thư.',
        'Thẩm định đơn giản, không cần khám sức khỏe',
        'Có thể đóng phí bảo hiểm một lần khi tham gia bảo hiểm hoặc đóng theo kỳ trong thời hạn Hợp đồng Bảo hiểm.'
      ]
    }
  },
  {
    img: '../../assets/img/home/home_product_2.jpg',
    title: 'C Care – Lựa chọn Nâng cao',
    price: '300 triệu đồng',
    description: 'Hỗ trợ điều trị bệnh ung thư cho từng giai đoạn, mang lại sự an tâm về tinh thần và sự đảm bảo về tài chính cho bạn và gia đình..',
    detail: {
      title: 'Thông tin về gói sản phẩm:',
      description: 'Với mức phí chỉ từ 500 đồng/ngày, bạn sẽ được bảo vệ lên đến 5 năm trước những hiểm họa rình rập bởi bệnh ung thư.',
      contents: [
        'bao hiem 2.',
        'Được chi trả lên đến 200 triệu đồng trước rủi ro bệnh ung thư.',
        'Thẩm định đơn giản, không cần khám sức khỏe',
        'Có thể đóng phí bảo hiểm một lần khi tham gia bảo hiểm hoặc đóng theo kỳ trong thời hạn Hợp đồng Bảo hiểm.'
      ]
    }
  },
  {
    img: '../../assets/img/home/home_product_3.jpg',
    title: 'C Care – Lựa chọn Ưu việt',
    price: '500 triệu đồng',
    description: 'Bạn có thể mua gì với 1.000 đồng? Với “C Care – Lựa chọn Ưu việt”, chỉ từ 1.000 đồng/ngày, bạn sẽ sở hữu một hợp đồng bảo hiểm sức khỏe có mệnh giá cao và mức phí vô cùng hợp lý.',
    detail: {
      title: 'Thông tin về gói sản phẩm:',
      description: 'Với mức phí chỉ từ 1000 đồng/ngày, bạn sẽ được bảo vệ lên đến 5 năm trước những hiểm họa rình rập bởi bệnh ung thư.',
      contents: [
        'bao hiem 3',
        'Được chi trả lên đến 200 triệu đồng trước rủi ro bệnh ung thư.',
        'Thẩm định đơn giản, không cần khám sức khỏe',
        'Có thể đóng phí bảo hiểm một lần khi tham gia bảo hiểm hoặc đóng theo kỳ trong thời hạn Hợp đồng Bảo hiểm.'
      ]
    }
  },
];
@Component({
  selector: 'app-homeproduct',
  templateUrl: './homeproduct.component.html',
  styleUrls: ['./homeproduct.component.sass']
})
export class HomeproductComponent  {
  isActive = false;
  products: IProduct[] = productsMockup;
  detail = this.products[0].detail;
  onDetail(detail: any) {
    console.log('form app', detail);
    this.detail = detail;
    this.isActive = !this.isActive;
  }
  
}
