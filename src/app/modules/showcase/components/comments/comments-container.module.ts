import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {CommentsEffects} from '../../../../state-manage/effects/comments.effects';
import {commentsReducer} from '../../../../state-manage/reducers/comment.reducers';
import {COMMENTS_STATE_NAME} from '../../../../state-manage/selectors/comments.selectors';
import {AddCommentViewComponent} from './add-comment/add-comment-view.component';
import {CommentItemViewComponent} from './comment-item/comment-item-view.component';
import {CommentsContainerComponent} from './comments-container.component';

@NgModule({
  declarations: [
    AddCommentViewComponent,
    CommentItemViewComponent,
    CommentsContainerComponent
  ],
  exports: [
    AddCommentViewComponent,
    CommentItemViewComponent,
    CommentsContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(COMMENTS_STATE_NAME, commentsReducer),
    EffectsModule.forFeature([CommentsEffects])
  ]
})
export class CommentsContainerModule {
}
