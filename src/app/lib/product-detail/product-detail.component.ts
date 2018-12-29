import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ACTIVE_INDEX } from '@angular/core/src/render3/interfaces/container';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
	isActive = false;
	@Input() detail;
	@Input() color;
	@Input() active;
	// @ViewChild('productBackDrop') productBackDrop: ElementRef;
	constructor() { }
	ngOnInit() {
		setTimeout(() => {
			console.log('++++++++');
			console.log(this.detail);

		}, 1000);
	}

	backDropRemoveClass() {
		this.isActive = !this.isActive;
	}
}
