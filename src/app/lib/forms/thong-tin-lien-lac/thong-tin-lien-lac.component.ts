import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-thong-tin-lien-lac',
	templateUrl: './thong-tin-lien-lac.component.html',
	styleUrls: ['./thong-tin-lien-lac.component.sass']
})
export class ThongTinLienLacComponent implements OnInit {
	@ViewChild('temForm') form;
	constructor() { }

	ngOnInit() {
	}

}
