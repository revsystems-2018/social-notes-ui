import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SnuNotes} from '../../../../api/snu-notes';
import {notesLoadedAction} from '../../../../state-manage/actions/notes/notes.actions';
import {AppState} from '../../../../state-manage/app.state';
import {selectNotes} from '../../../../state-manage/selectors/notes.selectors';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public loadState: boolean;

  private _loadingListen: Observable<number>;

  constructor(private _store: Store<AppState>) {
    this._loadingListen = new Observable<number>();
    this.loadState = true;
  }

  ngOnInit(): void {
    this._loadingListen = this._store.select(selectNotes);

    this._store.dispatch(notesLoadedAction());

    this._listenLoading();
  }

  private _listenLoading(): void {
    this._loadingListen.subscribe((value: number) => {
      this.loadState = value <= 0;
    });
  }
}
