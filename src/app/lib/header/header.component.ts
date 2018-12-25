import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openMenu() {
    let menuBtn = document.getElementById('header__trigger');
    let header__menu = document.getElementById('header__menu');
    let header__overlay = document.getElementById('header__overlay');
    menuBtn.classList.toggle('header__trigger--open');
    header__menu.classList.toggle('header__menu--active');
    header__overlay.classList.toggle('header__overlay--active');
  }
}
