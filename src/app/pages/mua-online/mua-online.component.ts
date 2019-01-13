import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreFormDataService } from 'app/services/store-form-data/store-form-data.service';

let links = [
	'/mua-online/mua-online-buoc1',
	'/mua-online/mua-online-buoc2',
	'/mua-online/mua-online-buoc3',
	'/mua-online/mua-online-buoc3-nhap-otp',
	'/mua-online/mua-online-buoc4',
	'/mua-online/mua-online-buoc5',
	'/mua-online/mua-online-buoc6-hoanthanh'
];


@Component({
	selector: 'app-mua-online',
	templateUrl: './mua-online.component.html',
	styleUrls: ['./mua-online.component.sass']
})
export class MuaOnlineComponent implements OnInit {
	links: string[];
	nextLink: string;
	prevLink: string;
	cursor = 0;

	constructor(
		private router: Router,
		private storeData: StoreFormDataService
		) {
		this.links = links;
	}

	ngOnInit() {
	}

}
