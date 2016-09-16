import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service'

@Component({
  moduleId: module.id,
  selector: 'app-articlecommentarea',
  templateUrl: 'articlecommentarea.component.html',
  styleUrls: ['articlecommentarea.component.css'],
  providers: [AppService]
})
export class ArticlecommentareaComponent implements OnInit {

  constructor(private _appService:AppService) {
  }

  ngOnInit() {
  }

}
