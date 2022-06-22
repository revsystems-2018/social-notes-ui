import {createFeatureSelector, createSelector} from '@ngrx/store';
import {noteEntityAdapter} from '../adapter/notes.adapter';
import {NotesState} from '../types/notes.state';

export const NOTES_STATE_NAME: string = 'Notes';

export const selectNotesFeature = createFeatureSelector<NotesState>(NOTES_STATE_NAME);

const noteSelectors = noteEntityAdapter.getSelectors();

export const selectNotes = createSelector(
  selectNotesFeature,
  noteSelectors.selectTotal
);

export const selectAllNotes = createSelector(
  selectNotesFeature,
  noteSelectors.selectAll
);
