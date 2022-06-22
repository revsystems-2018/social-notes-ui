import {EntityState} from '@ngrx/entity';
import {SnuUsers} from '../../api/snu-users';
import {userEntityAdapter} from '../adapter/users.adapter';

export interface UsersState extends EntityState<SnuUsers> {
  loadingUsers?: boolean;
  userLogged?: SnuUsers;
}

export const initialUsersState: UsersState = userEntityAdapter.getInitialState();

