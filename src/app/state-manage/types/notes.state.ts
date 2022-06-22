import {SnuNotes} from '../../api/snu-notes';
import {EntityState} from '@ngrx/entity';
import {noteEntityAdapter} from '../adapter/notes.adapter';

export interface NotesState extends EntityState<SnuNotes> {
  loading?: boolean;
}

export const initialNotesState: NotesState = noteEntityAdapter.getInitialState();
