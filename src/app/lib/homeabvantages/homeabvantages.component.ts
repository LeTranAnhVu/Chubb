import { Component, OnInit } from '@angular/core';
import { AbvantageHome } from 'app/interfaces/abvantage-home';
import { HomeabvantagesService } from 'app/services/homeabvantages/homeabvantages.service';
@Component({
	selector: 'app-homeabvantages',
	templateUrl: './homeabvantages.component.html',
	styleUrls: ['./homeabvantages.component.sass']
})
export class HomeabvantagesComponent implements OnInit {

	constructor(private abvantageHome: HomeabvantagesService) { }
	abvantagehome: AbvantageHome[];
	ngOnInit() {
		this.abvantageHome.getData().subscribe(data => {
			this.abvantagehome = data.homeabvantages;
		});
	}

}
