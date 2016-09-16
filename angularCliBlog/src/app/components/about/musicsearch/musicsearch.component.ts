import { Component, OnInit } from '@angular/core';
import {AppService} from '../../../services/app.service';

@Component({
  moduleId: module.id,
  selector: 'app-musicsearch',
  templateUrl: 'musicsearch.component.html',
  styleUrls: ['musicsearch.component.css'],
  providers:[AppService]
})
export class MusicsearchComponent implements OnInit {
  items;
  str:string='';

  constructor(private _appService:AppService) {
  }

  ngOnInit() {
  }

  getMusic(){
    this.items=this._appService.getMusicInfo(this.str)
  }

}
