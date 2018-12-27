import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderMenu } from '../../interfaces/header-menu';
import { HeaderMenuService } from '../../services/header-menu.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
	constructor(private menuService: HeaderMenuService) { }
	menu: HeaderMenu[];
	ngOnInit() {
		// get data from db by using HeaderMenuService
		// then return the data to this.menu
		this.menuService.getData().subscribe(data => {
			this.menu = data.menu;
		});

	}
	openMenu() {
		let menuBtn = document.getElementById('header__trigger');
		let header__menu = document.getElementById('header__menu');
		let header__overlay = document.getElementById('header__overlay');
		menuBtn.classList.toggle('header__trigger--open');
		header__menu.classList.toggle('header__menu--active');
		header__overlay.classList.toggle('header__overlay--active');
	}
	@HostListener('window:scroll', [])
	headerScroll() {
		let number = window.pageYOffset;
		let header = document.getElementById('canhcam__header');
		if (number > 150) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	}
}
