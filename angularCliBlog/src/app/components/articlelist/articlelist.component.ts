import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-articlelist',
  templateUrl: 'articlelist.component.html',
  styleUrls: ['articlelist.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class ArticlelistComponent implements OnInit {
  items;
  constructor() { }

  ngOnInit() {
    this.items=[
      {
        id:1,
        title:'css3',
        viewcount:11,
      },
      {
        id:2,
        title:'html5',
        viewcount:14,
      },
      {
        id:3,
        title:'java',
        viewcount:111,
      },
      {
        id:4,
        title:'python',
        viewcount:131,
      },
      {
        id:5,
        title:'es6',
        viewcount:223,
      },
      {
        id:6,
        title:'laravel',
        viewcount:311,
      },
      {
        id:7,
        title:'thinkPHP',
        viewcount:109,
      },
    ];
  }

}
