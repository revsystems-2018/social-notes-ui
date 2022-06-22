import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {UserRequest} from '../../services/body-request/user-request';
import {ShowcaseUserService} from '../../services/showcase-user.service';
import {buildUser} from '../../modules/showcase/utils/showcase.utils';
import {userErrorAction, usersLoadedAction, readUserAction} from '../actions/users/users.actions';

@Injectable()
export class UsersEffects {

  private readonly _USER_ID: string = '6edfc581';

  private _loadUsersListener = createEffect(() => this._actions.pipe(
    ofType(usersLoadedAction),
    mergeMap(() => this._showcaseUserService.doGet(this._USER_ID).pipe(
      map((user: UserRequest) => (readUserAction({payload: buildUser(user)}))),
      catchError(() => of(userErrorAction))
    ))
  ));

  constructor(private _actions: Actions,
              private _showcaseUserService: ShowcaseUserService) {
  }
}
