import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/Types/types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() userList: IUser[] | null = [];
}
