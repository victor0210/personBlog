import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {ROUTER_DIRECTIVES} from '@angular/router'
import {Http, Headers} from '@angular/http'
import {async} from "rxjs/scheduler/async";

@Component({
  moduleId: module.id,
  selector: 'app-musicsearch',
  templateUrl: 'musicsearch.component.html',
  styleUrls: ['musicsearch.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [AppService]
})
export class MusicsearchComponent implements OnInit {
  items;
  str: string = '';

  constructor(private _appService: AppService, private _http: Http) {
  }

  ngOnInit() {
  }

  getMusic() {
    this._http.get("https://api.spotify.com/v1/search?q=" + this.str + "&type=track&market=US",async)
      .map(res => res.json())
      .subscribe(res => {
        this.items = res.tracks;
      });
  }

}
