import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {SnuComments} from '../../api/snu-comments';

const selectCommentId = (comment: SnuComments): number => comment.commentId;

export const commentEntityAdapter: EntityAdapter<SnuComments> = createEntityAdapter<SnuComments>({
  selectId: selectCommentId,
  sortComparer: false
});
