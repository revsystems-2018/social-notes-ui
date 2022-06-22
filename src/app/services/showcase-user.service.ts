import {HttpClient} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs';
import {UserRequest} from './body-request/user-request';

@Injectable({
  providedIn: 'root'
})
export class ShowcaseUserService {

  private _accountId: string;

  constructor(private _httpClient: HttpClient,
              private _injector: Injector) {
    this._accountId = '';
  }

  public contextPath(): string {
    return `http://localhost:8080`;
  }

  public path(): string {
    return `api/users/search`;
  }

  public doGet(accountId: string): Observable<UserRequest> {
    this._accountId = accountId;
    return this._httpClient.get<UserRequest>(this._getUrl());
  }

  private _getUrl(): string {
    return `${this.contextPath()}/${this.path()}/${this._accountId}`;
  }
}
