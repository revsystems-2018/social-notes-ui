import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SnuPosts} from '../../api/snu-posts';
import {postEntityAdapter} from '../adapter/posts.adapter';
import {PostsState} from '../types/posts.state';

export const POSTS_STATE_NAME: string = 'Posts';

export const selectPostsFeature = createFeatureSelector<PostsState>(POSTS_STATE_NAME);

const postSelectors = postEntityAdapter.getSelectors();

export const selectPostCreated = createSelector(
  selectPostsFeature,
  (state: PostsState) => state.infoUpdated
);

export const selectAllPost = createSelector(
  selectPostsFeature,
  postSelectors.selectAll
);

export const selectPostRegisteredById = (postId: number) => {
  return createSelector(
    selectAllPost,
    (posts: SnuPosts[]): SnuPosts | undefined => {
      const post: SnuPosts | undefined = posts.find((item: SnuPosts) => item.postId === postId);

      if (post) {
        return post;
      }

      return undefined;
    }
  );
};
