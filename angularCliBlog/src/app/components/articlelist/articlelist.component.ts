import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Http, Headers} from '@angular/http';
@Component({
  moduleId: module.id,
  selector: 'app-articlelist',
  templateUrl: 'articlelist.component.html',
  styleUrls: ['articlelist.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class ArticlelistComponent implements OnInit {
  items;

  constructor(private _http: Http) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this._http.get('http://bloglaravel.dev/ajax/articles')
      .map(res=>res.json())
      .subscribe(res => {
        this.items=res;
      });
  }
}
