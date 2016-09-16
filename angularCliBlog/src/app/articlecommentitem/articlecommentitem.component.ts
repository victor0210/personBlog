import {Component, OnInit} from '@angular/core';
import {AppService} from '../services/app.service';
import {map} from 'rxjs/operator/map';
import {ActivatedRoute} from '@angular/router';
import {arrayify} from "tslint/lib/utils";

@Component({
  moduleId: module.id,
  selector: 'app-articlecommentitem',
  templateUrl: 'articlecommentitem.component.html',
  styleUrls: ['articlecommentitem.component.css'],
  providers: [AppService]
})
export class ArticlecommentitemComponent implements OnInit {
  items;

  constructor(private _appService:AppService,private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.getComments();
  }

  getComments(){
    this.route.params.map(params => params['id'])
      .subscribe((id) => {
          this.items = this._appService.getComments(id);
      });
  }
}
