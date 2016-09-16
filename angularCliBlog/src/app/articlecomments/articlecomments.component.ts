import { Component, OnInit } from '@angular/core';
import {ArticlecommentitemComponent} from '../articlecommentitem/articlecommentitem.component';
import {Http,Headers} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-articlecomments',
  templateUrl: 'articlecomments.component.html',
  styleUrls: ['articlecomments.component.css'],
  directives:[ArticlecommentitemComponent],
})
export class ArticlecommentsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
