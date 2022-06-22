import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {postsReducer} from '../../../../state-manage/reducers/post.reducers';
import {POSTS_STATE_NAME} from '../../../../state-manage/selectors/posts.selectors';
import {PostNoteContainerComponent} from './post-note-container.component';
import {PostNoteViewComponent} from './post-view/post-note-view.component';

@NgModule({
  declarations: [
    PostNoteViewComponent,
    PostNoteContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(POSTS_STATE_NAME, postsReducer)
  ],
  exports: [
    PostNoteViewComponent,
    PostNoteContainerComponent
  ]
})
export class PostNoteContainerModule {
}
