import {createAction, props} from '@ngrx/store';
import {SnuPosts} from '../../../api/snu-posts';
import {ActionPayload} from '../../types/action-payload';

const CREATE_POSTS_TYPE: string = '[Posts] Create Post';
const REMOVE_POSTS_TYPE: string = '[Posts] Remove Post';
const CREATED_POSTS_TYPE: string = '[Posts] Post Created';
const LOADED_ERROR_POSTS_TYPE: string = '[Posts] Posts Loaded Error';

export const createPostAction = createAction(
  CREATE_POSTS_TYPE,
  props<ActionPayload<SnuPosts>>()
);

export const postCreatedAction = createAction(
  CREATED_POSTS_TYPE
);

export const removePostAction = createAction(
  REMOVE_POSTS_TYPE,
  props<{ postId: number }>()
);

export const postErrorAction = createAction(
  LOADED_ERROR_POSTS_TYPE
);
