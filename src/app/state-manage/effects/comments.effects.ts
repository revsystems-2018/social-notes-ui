import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {SnuComments} from '../../api/snu-comments';
import {SnuNotes} from '../../api/snu-notes';
import {ShowcaseCommentsService} from '../../services/showcase-comments.service';
import {ShowcaseNotesService} from '../../services/showcase-notes.service';
import {commentErrorAction, commentsLoadedAction, setAllCommentsAction} from '../actions/comments/comments.actions';
import {noteErrorAction, notesLoadedAction, setAllNotesAction} from '../actions/notes/notes.actions';

@Injectable()
export class CommentsEffects {

  private _loadCommentsListener = createEffect(() => this._actions.pipe(
    ofType(commentsLoadedAction),
    mergeMap(() => this._showcaseCommentsService.getCommentsApi().pipe(
      map((comments: SnuComments[]) => (setAllCommentsAction({payload: comments}))),
      catchError(() => of(commentErrorAction))
    ))
  ));

  constructor(private _actions: Actions, private _showcaseCommentsService: ShowcaseCommentsService) {
  }
}
