import {createAction, props} from '@ngrx/store';
import {SnuComments} from '../../../api/snu-comments';
import {ActionPayload} from '../../types/action-payload';

const CREATE_COMMENTS_TYPE: string = '[Comments] Create Comments';
const REMOVE_COMMENTS_TYPE: string = '[Comments] Remove Comments';
const OPEN_COMMENTS_TYPE: string = '[Comments] Open Comments';
const CLOSE_COMMENTS_TYPE: string = '[Comments] Close Comments';
const LOADED_COMMENTS_TYPE: string = '[Comments] Load Comments';
const LOADED_SUCCESS_COMMENTS_TYPE: string = '[Comments] Comments Loaded Success';
const LOADED_ERROR_COMMENTS_TYPE: string = '[Comments] Comments Loaded Error';

export const createCommentAction = createAction(
  CREATE_COMMENTS_TYPE,
  props<ActionPayload<SnuComments>>()
);

export const removeCommentAction = createAction(
  REMOVE_COMMENTS_TYPE,
  props<{ commentId: number }>()
);

export const openCommentsAction = createAction(
  OPEN_COMMENTS_TYPE,
  props<{ noteId: number }>()
);

export const closeCommentsAction = createAction(
  CLOSE_COMMENTS_TYPE,
  props<{ isClosed: boolean }>()
);

export const commentsLoadedAction = createAction(
  LOADED_COMMENTS_TYPE
);

export const setAllCommentsAction = createAction(
  LOADED_SUCCESS_COMMENTS_TYPE,
  props<ActionPayload<SnuComments[]>>()
);

export const getAllCommentsAction = createAction(
  LOADED_SUCCESS_COMMENTS_TYPE,
  props<ActionPayload<SnuComments[]>>()
);

export const commentErrorAction = createAction(
  LOADED_ERROR_COMMENTS_TYPE
);
