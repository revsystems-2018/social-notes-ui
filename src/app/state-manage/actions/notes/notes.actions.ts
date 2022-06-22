import {createAction, props} from '@ngrx/store';
import {SnuNotes} from '../../../api/snu-notes';
import {ActionPayload} from '../../types/action-payload';

const CREATE_NOTES_TYPE: string = '[Notes] Create Notes';
const REMOVE_NOTES_TYPE: string = '[Notes] Remove Notes';
const LOADED_NOTES_TYPE: string = '[Notes] Load Notes';
const LOADED_SUCCESS_NOTES_TYPE: string = '[Notes] Notes Loaded Success';
const LOADED_ERROR_NOTES_TYPE: string = '[Notes] Notes Loaded Error';

export const createNoteAction = createAction(
  CREATE_NOTES_TYPE,
  props<ActionPayload<SnuNotes>>()
);

export const removeNoteAction = createAction(
  REMOVE_NOTES_TYPE,
  props<{ noteId: number }>()
);

export const notesLoadedAction = createAction(
  LOADED_NOTES_TYPE
);

export const setAllNotesAction = createAction(
  LOADED_SUCCESS_NOTES_TYPE,
  props<ActionPayload<SnuNotes[]>>()
);

export const getAllNotesAction = createAction(
  LOADED_SUCCESS_NOTES_TYPE,
  props<ActionPayload<SnuNotes[]>>()
);

export const noteErrorAction = createAction(
  LOADED_ERROR_NOTES_TYPE
);
