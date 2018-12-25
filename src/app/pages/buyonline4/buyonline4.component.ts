import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyonline4',
  templateUrl: './buyonline4.component.html',
  styleUrls: ['./buyonline4.component.sass']
})
export class Buyonline4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myFunction() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("demo").innerHTML = txt;
  }

}
