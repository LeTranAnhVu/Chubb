import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BannerHome } from 'app/interfaces/banner-home';
import { BannerhomeService } from 'app/services/bannerhome/bannerhome.service';

@Component({
	selector: 'app-homebanner',
	templateUrl: './homebanner.component.html',
	styleUrls: ['./homebanner.component.sass'],
	providers: [NgbCarouselConfig]
})
export class HomebannerComponent implements OnInit {
	constructor(config: NgbCarouselConfig, private _http: HttpClient, private bannerHome: BannerhomeService ) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = false;
	}
	bannerhome: BannerHome[];
	ngOnInit() {
		this.bannerHome.getData().subscribe(data => {
			this.bannerhome = data.homebanner;
		});
	}
	
}
