import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {createNoteAction, noteErrorAction, notesLoadedAction, removeNoteAction, setAllNotesAction} from '../actions/notes/notes.actions';
import {noteEntityAdapter} from '../adapter/notes.adapter';
import {initialNotesState, NotesState} from '../types/notes.state';

export const notesReducer: ActionReducer<NotesState, Action> = createReducer(
  initialNotesState,
  on(notesLoadedAction, (state) => {
    return {...state, loading: true};
  }),
  on(noteErrorAction, (state) => {
    return {...state, loading: undefined};
  }),
  on(removeNoteAction, (state, {noteId}) => {
    return noteEntityAdapter.removeOne(noteId, {...state});
  }),
  on(setAllNotesAction, (state, actionPayload) => {
    return noteEntityAdapter.setAll(actionPayload.payload, {...state, loading: false});
  }),
  on(createNoteAction, (state, actionPayload) => {
    return noteEntityAdapter.addOne(actionPayload.payload, {...state, loading: false});
  })
);
