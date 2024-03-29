import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMock } from 'src/app/ngRx/user/user.actions';
import { IUser } from 'src/app/modules/user/Types/types';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  public users$: Observable<IUser[]>;

  constructor(private store: Store<{ users: IUser[] }>) {
    this.users$ = store.select('users');
  }

  public loadMockData() {
    this.store.dispatch(loadMock())
  }
}
