import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SnuUsers} from '../../api/snu-users';
import {userEntityAdapter} from '../adapter/users.adapter';
import {UsersState} from '../types/users.state';

export const USERS_STATE_NAME: string = 'Users';

export const selectUsersFeature = createFeatureSelector<UsersState>(USERS_STATE_NAME);

const userSelectors = userEntityAdapter.getSelectors();

export const selectUserLoading = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.loadingUsers
);

export const selectAllUsers = createSelector(
  selectUsersFeature,
  userSelectors.selectAll
);

export const selectUserLoggedById = (userId: number) => {
  return createSelector(
    selectAllUsers,
    (users: SnuUsers[]): SnuUsers | undefined => {
      const user: SnuUsers | undefined = users.find((item: SnuUsers) => item.userId === userId);

      if (user) {
        return user;
      }

      return undefined;
    }
  );
};
