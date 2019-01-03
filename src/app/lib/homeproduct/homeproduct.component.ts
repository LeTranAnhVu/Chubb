import { Component, Input, OnInit } from '@angular/core';
import { HomeProduct, HomeroductDetail } from 'app/interfaces/product-home';
import { ProductService } from 'app/services/product/product.service';




let colorsTheme = [
	'green', 'orange', 'purple'
];

@Component({
	selector: 'app-homeproduct',
	templateUrl: './homeproduct.component.html',
	styleUrls: ['./homeproduct.component.sass']
})

export class HomeproductComponent implements OnInit {
	constructor(private homeProductService: ProductService) {}
	productitems: HomeProduct[];
	productdetail: HomeroductDetail[];
	@Input() active;
	// Active product-detail-wrap
	isActive = false;
	// color Array
	currentIndex = 0;
	colors = colorsTheme;
	// Array col start from 0
	selectedCol = 0;
	onDetail(data: any) {
		// Get product detail when click
		this.productdetail = data[0];
		this.currentIndex = data[1];
		// Active col-lg-4 khi mà đúng màu 
		this.selectedCol = this.currentIndex;
		this.isActive = !this.isActive;
	}
	
	ngOnInit() {
		this.homeProductService.getData().subscribe(data => {
			this.productitems = data.homeproduct;
			this.productdetail = data.homeproduct[0].detail;
			console.log(this.productdetail);
		});
	}
}
