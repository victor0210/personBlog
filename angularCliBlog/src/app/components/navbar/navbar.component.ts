import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Http,Headers} from '@angular/http';
import {AppService} from '../../services/app.service'
@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers:[AppService]
})
export class NavbarComponent implements OnInit {
  login_state=0;
  password;
  username;
  headers;
  constructor(private _http:Http,private _appService:AppService) {
  }

  ngOnInit() {
    this.login();
  }

  login(){
  }
}
