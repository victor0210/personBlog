import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';

@Injectable()
export class AppService {

  constructor(public _http: Http) {
  }

  getComments(id) {

    return [
      {
        username: 'humengtao',
        content: 'here is a comment of article ' + id,
        date: '2012-2-2 11:11:11'
      },
      {
        username: 'humengtao',
        content: 'here is a comment of article ' + id,
        date: '2012-2-2 11:11:11'
      },
      {
        username: 'humengtao',
        content: 'here is a comment of article ' + id,
        date: '2012-2-2 11:11:11'
      },
      {
        username: 'humengtao',
        content: 'here is a comment of article ' + id,
        date: '2012-2-2 11:11:11'
      },
      {
        username: 'humengtao',
        content: 'here is a comment of article ' + id,
        date: '2012-2-2 11:11:11'
      },
      {
        username: 'humengtao',
        content: 'here is a comment of article ' + id,
        date: '2012-2-2 11:11:11'
      },
      {
        username: 'humengtao',
        content: 'here is a comment of article ' + id,
        date: '2012-2-2 11:11:11'
      },
      {
        username: 'humengtao',
        content: 'here is a comment of article ' + id,
        date: '2012-2-2 11:11:11'
      },
      {
        username: 'humengtao',
        content: 'here is a comment of article ' + id,
        date: '2012-2-2 11:11:11'
      }
    ]
  }
}
