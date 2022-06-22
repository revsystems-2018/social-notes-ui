import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {SnuNotes} from '../../api/snu-notes';
import {ShowcaseNotesService} from '../../services/showcase-notes.service';
import {noteErrorAction, notesLoadedAction, setAllNotesAction} from '../actions/notes/notes.actions';

@Injectable()
export class NotesEffects {

  private _loadNotesListener = createEffect(() => this._actions.pipe(
    ofType(notesLoadedAction),
    mergeMap(() => this._showcaseNotesService.getDataApi().pipe(
      map((notes: SnuNotes[]) => (setAllNotesAction({payload: notes}))),
      catchError(() => of(noteErrorAction))
    ))
  ));

  constructor(private _actions: Actions, private _showcaseNotesService: ShowcaseNotesService) {
  }
}
