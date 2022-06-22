import {EntityState} from '@ngrx/entity';
import {SnuComments} from '../../api/snu-comments';
import {commentEntityAdapter} from '../adapter/comments.adapter';

export interface CommentsState extends EntityState<SnuComments> {
  isClosed?: boolean;
  noteIdSelected?: number;
}

export const initialCommentsState: CommentsState = commentEntityAdapter.getInitialState();
