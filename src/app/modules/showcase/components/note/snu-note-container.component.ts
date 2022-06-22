import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SnuComments} from '../../../../api/snu-comments';
import {SnuNotes} from '../../../../api/snu-notes';
import {openCommentsAction} from '../../../../state-manage/actions/comments/comments.actions';
import {AppState} from '../../../../state-manage/app.state';
import {selectCommentClosed, selectCommentsById} from '../../../../state-manage/selectors/comments.selectors';

@Component({
  selector: 'snu-note',
  templateUrl: './snu-note-container.component.html',
  styleUrls: ['./snu-note-container.component.css']
})
export class SnuNoteContainerComponent implements OnInit {
  @Input() item!: SnuNotes;

  public fromUpdateComment: boolean;
  public fromCommentList: boolean;
  public fromAddComment: boolean;
  public comments: SnuComments[];

  public commentsListen: Observable<SnuComments[]>;
  private _isClosedListen: Observable<boolean | undefined>;

  constructor(private _store: Store<AppState>) {
    this.commentsListen = new Observable<SnuComments[]>();
    this._isClosedListen = new Observable<boolean>();
    this.fromUpdateComment = true;
    this.fromCommentList = false;
    this.fromAddComment = false;
    this.comments = [];
  }

  ngOnInit(): void {
    this._commentsByIdListen();
    this._isClosedCommentListen();
  }

  public onClickComments(): void {
    this.fromCommentList = true;
    this.fromAddComment = false;

    this._commentsByIdListen();

    this._store.dispatch(openCommentsAction({noteId: this.item.id}));
  }

  public onClickAddComment(): void {
    this.fromUpdateComment = false;
    this.fromCommentList = false;
    this.fromAddComment = true;
  }

  public hideCommentList(isClosed: boolean): void {
    this.fromCommentList = isClosed;
  }

  private _commentsByIdListen(): void {
    if (this.item) {
      this.commentsListen = this._store.select(selectCommentsById(this.item.id));
    }
  }

  private _isClosedCommentListen(): void {
    if (this.item) {
      this._isClosedListen = this._store.select(selectCommentClosed);
    }
  }
}
