import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/Types/types';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Input() user?: IUser;

  public isForEditing() {
    return Boolean(this.user);
  }
}
