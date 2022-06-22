
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {SnuNotes} from '../../api/snu-notes';
import {SnuUsers} from '../../api/snu-users';

const selectUserId = (user: SnuUsers): number => user.userId;

export const userEntityAdapter: EntityAdapter<SnuUsers> = createEntityAdapter<SnuUsers>({
  selectId: selectUserId,
  sortComparer: false
});
