import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/Types/types';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: IUser;

  constructor(public userService: UserService) {}

  public getEditUrl(id: number) {
    return `/users/${id}`;
  }
}
