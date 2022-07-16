import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { remove } from '../ngRx/user/user.actions';
import { IUser } from '../Types/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users$: Observable<IUser[]>;

  constructor(private _store: Store<{ users: IUser[] }>) {
    this.users$ = _store.select('users');
  }

  public removeUser(id: number) {
    this._store.dispatch(remove({id}));
  }

  public getUserById(id: number) {
    return this.users$.pipe(map((r) =>{ console.log(r); return r}));
  }
}
