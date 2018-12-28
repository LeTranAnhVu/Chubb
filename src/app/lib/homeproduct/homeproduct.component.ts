import { Component, Input } from '@angular/core';
interface IProduct {
	img: string;
	// theme: string;
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

// let productsMockup: IProduct[] = 

let colorsTheme = [
	'green', 'orange', 'purple'
];

@Component({
	selector: 'app-homeproduct',
	templateUrl: './homeproduct.component.html',
	styleUrls: ['./homeproduct.component.sass']
})

export class HomeproductComponent  {
	@Input() active;
	// Active product-detail-wrap
	isActive = false;
	// color Array
	currentIndex = 0;
	colors = colorsTheme;
	products: IProduct[] = productsMockup;
	detail = this.products[0].detail;
	// Array col start from 0
	selectedCol = 0;
	onDetail(data: any) {

		console.log('form app', data);
		this.detail = data[0];
		this.currentIndex = data[1];
		// Active col-lg-4 khi mà đúng màu 
		this.selectedCol = this.currentIndex;
		this.isActive = !this.isActive;
	}
}
