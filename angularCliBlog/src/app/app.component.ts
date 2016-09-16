import {Component} from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ROUTER_DIRECTIVES} from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavbarComponent, ROUTER_DIRECTIVES],
})
export class AppComponent {
  title = 'app works!';
}
