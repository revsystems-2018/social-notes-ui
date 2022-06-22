import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SnuComments} from '../../api/snu-comments';
import {commentEntityAdapter} from '../adapter/comments.adapter';
import {CommentsState} from '../types/comments.state';

export const COMMENTS_STATE_NAME: string = 'Comments';

export const selectCommentsFeature = createFeatureSelector<CommentsState>(COMMENTS_STATE_NAME);

const commentSelectors = commentEntityAdapter.getSelectors();

export const selectComments = createSelector(
  selectCommentsFeature,
  commentSelectors.selectTotal
);

export const selectCommentClosed = createSelector(
  selectCommentsFeature,
  (state: CommentsState) => state.isClosed
);

export const selectCommentSelected = createSelector(
  selectCommentsFeature,
  (state: CommentsState) => state.noteIdSelected
);

export const selectAllComments = createSelector(
  selectCommentsFeature,
  commentSelectors.selectAll
);

export const selectCommentsById = (noteId: number) => {
  return createSelector(
    selectAllComments,
    (comments: SnuComments[]): SnuComments[] => {
      const commentList: SnuComments[] = comments.filter((item: SnuComments) => item.noteId === noteId);

      if (commentList) {
        return commentList;
      }

      return [];
    }
  );
};
