import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { add, remove, update } from 'src/app/ngRx/user/user.actions';
import { IUser, IUserPayload } from '../Types/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users$: Observable<IUser[]>;

  constructor(private _store: Store<{ users: IUser[] }>) {
    this.users$ = _store.select('users');
  }

  public getUserById(id: number) {
    return this.users$.pipe(
      map((users) => {
        const foundUser = users.find((user) => user.id === id);
        if (!foundUser) throw new Error('User not found');
        return foundUser;
      })
    );
  }

  public removeUser(id: number) {
    this._store.dispatch(remove({ id }));
  }

  public updateUser(id: number, userData: IUserPayload) {
    this._store.dispatch(update({ id, newData: userData }));
  }

  public addUser(userData: IUserPayload) {
    this._store.dispatch(add({ user: userData }));
  }
}
