import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ArticlecommentsComponent} from '../articlecomments/articlecomments.component';
import {ArticlecommentareaComponent} from '../articlecommentarea/articlecommentarea.component';
import {AppService} from '../../services/app.service';
import {map} from 'rxjs/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-articlecontent',
  templateUrl: 'articlecontent.component.html',
  styleUrls: ['articlecontent.component.css'],
  directives: [ArticlecommentsComponent, ArticlecommentareaComponent],
  providers:[AppService]
})
export class ArticlecontentComponent implements OnInit {
  content;
  constructor(private route:ActivatedRoute,private _appService:AppService) {
  }

  ngOnInit() {
    this.getContent();
  }

  getContent(){
    this.route.params.map(params => params['id']).subscribe((id) => {
      this.content=this._appService.getContent(id);
    });
  }
}
