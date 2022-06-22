import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SnuUsers} from '../../../../api/snu-users';
import {usersLoadedAction} from '../../../../state-manage/actions/users/users.actions';
import {AppState} from '../../../../state-manage/app.state';
import {selectUserLoading, selectUserLoggedById} from '../../../../state-manage/selectors/users.selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public userData!: SnuUsers | undefined;
  public fullName: string;

  private _userListen: Observable<SnuUsers | undefined>;
  private _loadingUserListen: Observable<boolean | undefined>;

  public readonly PROFESSIONAL_USER: string = 'Software Developer';
  public readonly URL_PROFILE: string = 'https://i.ibb.co/jM7BvXM/rev-profile.jpg';

  constructor(private _store: Store<AppState>) {
    this._userListen = new Observable<SnuUsers>();
    this._loadingUserListen = new Observable<boolean>();
    this.fullName = '';
  }

  ngOnInit(): void {
    this._selectUser();
    this._listenUser();
  }

  private _selectUser(): void {
    this._loadingUserListen = this._store.select(selectUserLoading);

    this._store.dispatch(usersLoadedAction());

    this._userListen = this._store.select(selectUserLoggedById(14));
  }

  private _listenUser(): void {
    this._userListen.subscribe((value: SnuUsers | undefined) => {
      if (value) {
        this.userData = value;
        this.fullName = `${value.firstName} ${value.lastName}`
      }
    });
  }
}
