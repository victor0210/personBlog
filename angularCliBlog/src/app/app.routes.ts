/**
 * Created by humengtao on 16/9/16.
 */
import {provideRouter,RouterConfig} from '@angular/router';
import {ArticlelistComponent} from './components/articlelist/articlelist.component';
import {ArticlecontentComponent} from './components/articlecontent/articlecontent.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/about/artist/artist.component';

const routes:RouterConfig=[
  {
    path:'',component:ArticlelistComponent
  },
  {
    path:'content/:id',component:ArticlecontentComponent
  },
  {
    path:'music',component:AboutComponent
  },
  {
    path:'music/artist/:id',component:ArtistComponent
  }
];
export const appRouterProviders=[
  provideRouter(routes)
];
