/**
 * Created by humengtao on 16/9/16.
 */
import {provideRouter,RouterConfig} from '@angular/router';
import {ArticlelistComponent} from './articlelist/articlelist.component';
import {ArticlecontentComponent} from './articlecontent/articlecontent.component';
import {AboutComponent} from './about/about.component';


const routes:RouterConfig=[
  {
    path:'',component:ArticlelistComponent
  },
  {
    path:'content/:id',component:ArticlecontentComponent
  },
  {
    path:'about',component:AboutComponent
  }
];
export const appRouterProviders=[
  provideRouter(routes)
];
