import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SnuNotes} from '../../../../api/snu-notes';
import {commentsLoadedAction} from '../../../../state-manage/actions/comments/comments.actions';
import {AppState} from '../../../../state-manage/app.state';
import {selectComments} from '../../../../state-manage/selectors/comments.selectors';
import {selectAllNotes} from '../../../../state-manage/selectors/notes.selectors';

@Component({
  selector: 'snu-list-note',
  templateUrl: './snu-list-note.component.html',
  styleUrls: ['./snu-list-note.component.css']
})
export class SnuListNoteComponent implements OnInit {

  public noteList: SnuNotes[];

  private _notesListen: Observable<SnuNotes[]>;
  private _loadCommentsListen: Observable<number>;

  constructor(private _store: Store<AppState>) {
    this._loadCommentsListen = new Observable<number>();
    this._notesListen = new Observable<SnuNotes[]>();
    this.noteList = [];
  }

  ngOnInit(): void {
    this._selectNotes();
    this._listenNotes();
    this._selectComments();
  }

  private _selectNotes(): void {
    this._notesListen = this._store.select(selectAllNotes);
  }

  private _selectComments(): void {
    this._loadCommentsListen = this._store.select(selectComments);

    this._store.dispatch(commentsLoadedAction());
  }

  private _listenNotes(): void {
    this._notesListen.subscribe((values: SnuNotes[]) => {
      this.noteList = Array.from(values);
    });
  }
}
