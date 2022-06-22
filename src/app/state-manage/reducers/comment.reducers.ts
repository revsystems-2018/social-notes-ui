import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {
  closeCommentsAction,
  commentErrorAction,
  commentsLoadedAction,
  createCommentAction,
  openCommentsAction,
  removeCommentAction,
  setAllCommentsAction
} from '../actions/comments/comments.actions';
import {commentEntityAdapter} from '../adapter/comments.adapter';
import {CommentsState, initialCommentsState} from '../types/comments.state';

export const commentsReducer: ActionReducer<CommentsState, Action> = createReducer(
  initialCommentsState,
  on(commentsLoadedAction, (state) => {
    return {...state, isClosed: true};
  }),
  on(commentErrorAction, (state) => {
    return {...state, isClosed: false, noteIdSelected: undefined};
  }),
  on(removeCommentAction, (state, {commentId}) => {
    return commentEntityAdapter.removeOne(commentId, {...state});
  }),
  on(openCommentsAction, (state, {noteId}) => {
    return {...state, isClosed: true, noteIdSelected: noteId};
  }),
  on(closeCommentsAction, (state, {isClosed}) => {
    return {...state, isClosed: isClosed, noteIdSelected: undefined};
  }),
  on(setAllCommentsAction, (state, actionPayload) => {
    return commentEntityAdapter.setAll(actionPayload.payload, {...state});
  }),
  on(createCommentAction, (state, actionPayload) => {
    return commentEntityAdapter.addOne(actionPayload.payload, {...state});
  })
);
