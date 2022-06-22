import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {SnuPosts} from '../../api/snu-posts';

const selectPostId = (post: SnuPosts): number => post.postId;

export const postEntityAdapter: EntityAdapter<SnuPosts> = createEntityAdapter<SnuPosts>({
  selectId: selectPostId,
  sortComparer: false
});
