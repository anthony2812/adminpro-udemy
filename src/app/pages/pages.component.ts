import { Component, OnInit } from '@angular/core';
declare function init_plugins(); // de esta manera llamamos a una funcion de jquery
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
