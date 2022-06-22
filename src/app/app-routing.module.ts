import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './modules/public/components/home-page/home-page.component';
import {PostNoteContainerComponent} from './modules/shared/components/posts/post-note-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'notes',
    component: PostNoteContainerComponent,
    loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: '**',
    redirectTo: '/showcases'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
