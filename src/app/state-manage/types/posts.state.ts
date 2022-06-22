import {EntityState} from '@ngrx/entity';
import {SnuPosts} from '../../api/snu-posts';
import {postEntityAdapter} from '../adapter/posts.adapter';

export interface PostsState extends EntityState<SnuPosts> {
  infoUpdated?: boolean;
  postData?: SnuPosts;
}

export const initialPostsState: PostsState = postEntityAdapter.getInitialState();
