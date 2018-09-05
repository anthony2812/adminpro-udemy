import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';
declare function init_plugins(); // de esta manera llamamos a una funcion de jquery
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _ajustes : SettingsService){}
 
}
