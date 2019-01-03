import { Component, OnInit } from '@angular/core';
import { BannerContent } from 'app/interfaces/banner-content';
@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

	constructor() { }
	bannerContent: BannerContent = {
		img: 'assets/img/product/product_banner_1.png',
		titles: ['Sản phẩm Bảo hiểm hỗ trợ', 'điều trị ung thư - C Care']
	};
	ngOnInit() {
	}
	// heightInf(){
	//   let heightProd = document.getElementsByClassName('row')
	//   console.log(heightProd.offsetHeight)
	// }
	// heightInf()
}
