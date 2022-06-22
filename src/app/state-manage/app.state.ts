import {ActionReducerMap} from '@ngrx/store';
import {commentsReducer} from './reducers/comment.reducers';
import {notesReducer} from './reducers/note.reducers';
import {postsReducer} from './reducers/post.reducers';
import {usersReducer} from './reducers/user.reducers';
import {CommentsState} from './types/comments.state';
import {NotesState} from './types/notes.state';
import {PostsState} from './types/posts.state';
import {UsersState} from './types/users.state';

export interface AppState {
  items: NotesState;
  posts: PostsState;
  users: UsersState;
  comments: CommentsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  items: notesReducer,
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer
};
