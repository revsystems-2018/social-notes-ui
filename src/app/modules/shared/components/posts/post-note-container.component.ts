import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {SnuPosts} from '../../../../api/snu-posts';
import {ShowcaseNotesService} from '../../../../services/showcase-notes.service';
import {createPostAction, postCreatedAction} from '../../../../state-manage/actions/posts/posts.actions';
import {AppState} from '../../../../state-manage/app.state';
import {selectPostCreated, selectPostRegisteredById} from '../../../../state-manage/selectors/posts.selectors';
import {NoteViewResponse} from './properties/note-view.response';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-note-container.component.html',
  styleUrls: ['./post-note-container.component.css']
})
export class PostNoteContainerComponent implements OnInit, OnDestroy {

  public imageBackground!: string;

  private _imageLinks: string[];

  private _loadingListen: Observable<boolean | undefined>;
  private _postRegisteredListen: Observable<SnuPosts | undefined>;
  private _notesImageLinksSubscription: Subscription;

  constructor(private _showcaseNotesService: ShowcaseNotesService,
              private _store: Store<AppState>) {
    this._notesImageLinksSubscription = new Subscription();
    this._postRegisteredListen = new Observable<SnuPosts>();
    this._loadingListen = new Observable<boolean>();
    this._imageLinks = [];
  }

  ngOnInit(): void {
    this._findImageLinks();

    this._loadingListen = this._store.select(selectPostCreated);
    this._postRegisteredListen = this._store.select(selectPostRegisteredById(24));

    this._store.dispatch(postCreatedAction());
  }

  ngOnDestroy(): void {
    this._notesImageLinksSubscription.unsubscribe();
  }

  public refreshImageBackground(imageParent: string): void {
    this.imageBackground = this._imageLinks[Math.floor(Math.random() * this._imageLinks.length)];
  }

  public proceedNoteData(noteView: NoteViewResponse): void {

  }

  public finalizePostData(postView: SnuPosts): void {
    this._store.dispatch(createPostAction({payload: postView}));
  }

  private _findImageLinks(): void {
    this._notesImageLinksSubscription = this._showcaseNotesService.getDataImageLinks().subscribe(
      (values: string[]) => {
        this._imageLinks = values;
        this.imageBackground = values[Math.floor(Math.random() * values.length)];
      });
  }
}
