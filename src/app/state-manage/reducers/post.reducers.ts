import {createReducer, on} from '@ngrx/store';
import {SnuPosts} from '../../api/snu-posts';
import {createPostAction, postCreatedAction, postErrorAction, removePostAction} from '../actions/posts/posts.actions';
import {postEntityAdapter} from '../adapter/posts.adapter';
import {ActionPayload} from '../types/action-payload';
import {initialPostsState, PostsState} from '../types/posts.state';

export const postsReducer = createReducer(
  initialPostsState,
  on(postCreatedAction, (state: PostsState) => {
    return {...state, infoUpdated: true, postData: undefined};
  }),
  on(postErrorAction, (state: PostsState) => {
    return {...state, postData: undefined};
  }),
  on(removePostAction, (state: PostsState, action: { postId: number }) => {
    return postEntityAdapter.removeOne(action.postId, {...state});
  }),
  on(createPostAction, (state: PostsState, action: ActionPayload<SnuPosts>) => {
    return postEntityAdapter.setOne(action.payload, {...state, postData: action.payload});
  })
);
