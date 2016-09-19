import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {AppService} from '../../services/app.service';
import {map} from 'rxjs/operator/map';
import {Http} from '@angular/http';
import {async} from "rxjs/scheduler/async";

@Component({
  moduleId: module.id,
  selector: 'app-articlecontent',
  templateUrl: 'articlecontent.component.html',
  styleUrls: ['articlecontent.component.css'],
  providers: [AppService]
})
export class ArticlecontentComponent implements OnInit {
  title;
  content;
  items;
  constructor(private route: ActivatedRoute, private _appService: AppService, private _http: Http) {

  }

  ngOnInit() {
    this.getContent();
    this.getComments();
  }

  getContent() {
    this.route.params.map(params => params['id']).subscribe((id) => {
      this._http.get('http://bloglaravel.dev/ajax/articles/' + id, async)
        .map(res=>res.json())
        .subscribe(res=> {
          this.title = res[0].title;
          this.content = res[0].content;
        });
    });
  }

  getComments() {
    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        this._http.get('http://bloglaravel.dev/ajax/articles/' + id +'/comments', async)
          .map(res=>res.json())
          .subscribe(res=> {
            this.items=res;

            // this.title = res[0].title;
            // this.content = res[0].content;
          });
        // this.items = this._appService.getComments(id);
      });
  }
}
