import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {ActivatedRoute} from '@angular/router'
import {map} from 'rxjs/operator/map';
import {Http, Headers, Response} from '@angular/http';



@Component({
  moduleId: module.id,
  selector: 'app-artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.css'],
  providers: [AppService]
})
export class ArtistComponent implements OnInit {
  artistInfo;

  constructor(private _appService: AppService, private _route: ActivatedRoute,private _http: Http) {
  }
  ngOnInit() {
    this.getArtist();
  }

  getArtist() {
    this._route.params.map(params => params['id'])
      .subscribe((id) => {
        this._http.get("https://api.spotify.com/v1/artists/" + id)
          .map(res=> res.json())
          .subscribe(res => {
            this.artistInfo=res;
          });
      });
  }
}
