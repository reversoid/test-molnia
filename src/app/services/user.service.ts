import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { remove } from '../ngRx/user/user.actions';
import { IUser } from '../Types/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _store: Store<{ users: IUser[] }>) {}

  public removeUser(id: number) {
    this._store.dispatch(remove({id}));
  }
}
