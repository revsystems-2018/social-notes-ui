
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {SnuNotes} from '../../api/snu-notes';

const selectId = (note: SnuNotes): number => note.id;

export const noteEntityAdapter: EntityAdapter<SnuNotes> = createEntityAdapter<SnuNotes>({
  selectId,
  sortComparer: false
});
