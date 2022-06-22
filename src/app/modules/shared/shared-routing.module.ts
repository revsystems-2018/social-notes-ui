import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostNoteContainerComponent} from './components/posts/post-note-container.component';

const routes: Routes = [
  {
    path: 'notes',
    component: PostNoteContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {
}
