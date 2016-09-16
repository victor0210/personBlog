import { Component, OnInit } from '@angular/core';
import { MusicsearchComponent } from './musicsearch/musicsearch.component'
import {AppService} from '../../services/app.service'
@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives:[MusicsearchComponent],
  providers: [AppService]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
