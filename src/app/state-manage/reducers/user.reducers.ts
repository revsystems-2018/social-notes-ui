import {createReducer, on} from '@ngrx/store';
import {SnuUsers} from '../../api/snu-users';
import {readUserAction, removeUserAction, setAllUsersActions, userErrorAction, usersLoadedAction} from '../actions/users/users.actions';
import {userEntityAdapter} from '../adapter/users.adapter';
import {ActionPayload} from '../types/action-payload';
import {initialUsersState, UsersState} from '../types/users.state';

export const usersReducer = createReducer(
  initialUsersState,
  on(usersLoadedAction, (state: UsersState) => {
    return {...state, loadingUsers: true};
  }),
  on(userErrorAction, (state: UsersState) => {
    return {...state, loadingUsers: undefined};
  }),
  on(removeUserAction, (state: UsersState, action: { userId: number }) => {
    return userEntityAdapter.removeOne(action.userId, {...state});
  }),
  on(readUserAction, (state: UsersState, action: ActionPayload<SnuUsers>) => {
    return userEntityAdapter.setOne(action.payload, {...state, userLogged: action.payload});
  }),
  on(setAllUsersActions, (state: UsersState, action: ActionPayload<SnuUsers[]>) => {
    return userEntityAdapter.setAll(action.payload, {...state, loadingUsers: false});
  })
);
