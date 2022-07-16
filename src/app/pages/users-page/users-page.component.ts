import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/Types/types';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  public users$: Observable<IUser[]>;

  constructor(private _store: Store<{ users: IUser[] }>) {
    this.users$ = _store.select('users');
  }
}
