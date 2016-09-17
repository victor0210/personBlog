import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class AppService {

  constructor(private _http: Http) {
  }

  getContent(id) {
    return {
      id: id,
      title: 'this is article ' + id,
      content: 'This is the main content for ARTICLE--' + id + ' CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layoutslike multi-columns, flexible box or grid layouts. Experimental parts are vendor-prefixed and should either be avoided in production environments, or used with extreme caution as both their syntax and semantics can change in the future.Modules and the standardization processEDITCSS Level 2 needed 9 years, from August 2002 to June 2011 to reach the Recommendation status. This was due to the factthat a few secondary features hold back the whole specification. In order to accelerate the standardization ofnon-problematic features, the CSS Working Group of the W3C, in a decision referred as the Beijing doctrine, dividedCSS in smaller components called modules . Each of these modules is now an independent part of the language and movestowards standardization at its own pace. While some modules are already W3C Recommendations, other still are earlyWorking Drafts. New modules are also added when new needs are identified.'
    };

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
