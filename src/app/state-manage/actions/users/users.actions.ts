import {createAction, props} from '@ngrx/store';
import {SnuUsers} from '../../../api/snu-users';
import {ActionPayload} from '../../types/action-payload';

export const CREATE_USER_ACTION: string = '[Users] User Created';
export const DELETE_USER_ACTION: string = '[Users] User Removed';
export const LOAD_USERS_TYPE_ACTION: string = '[Users] Load Users';
export const LOADED_SUCCESS_USER_TYPE: string = '[Users] User Loaded Success';
export const LOADED_SUCCESS_USERS_TYPE: string = '[Users] Users Loaded Success';
export const LOADED_ERROR_USERS_TYPE: string = '[Users] Users Loaded Error';

export const createUserAction = createAction(
  CREATE_USER_ACTION,
  props<ActionPayload<SnuUsers>>()
);

export const removeUserAction = createAction(
  DELETE_USER_ACTION,
  props<{ userId: number }>()
);

export const usersLoadedAction = createAction(
  LOAD_USERS_TYPE_ACTION
);

export const userErrorAction = createAction(
  LOADED_ERROR_USERS_TYPE
);

export const readUserAction = createAction(
  LOADED_SUCCESS_USER_TYPE,
  props<ActionPayload<SnuUsers>>()
);

export const setAllUsersActions = createAction(
  LOADED_SUCCESS_USERS_TYPE,
  props<ActionPayload<SnuUsers[]>>()
);
