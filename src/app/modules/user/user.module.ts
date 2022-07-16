import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddUserPageComponent } from 'src/app/modules/user/pages/add-user-page/add-user-page.component';
import { UserFormComponent } from 'src/app/modules/user/components/user-form/user-form.component';
import { UsersPageComponent } from 'src/app/modules/user/pages/users-page/users-page.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { UserCardComponent } from 'src/app/modules/user/components/user-card/user-card.component';
import { UserListComponent } from 'src/app/modules/user/components/user-list/user-list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RouterModule } from '@angular/router';
import { EditPageComponent } from 'src/app/modules/user/pages/edit-page/edit-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  declarations: [
    UserFormComponent,
    AddUserPageComponent,
    UsersPageComponent,
    UserCardComponent,
    UserListComponent,
    EditPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzTypographyModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzUploadModule,
    NzIconModule,
    NzRadioModule,
    NzCardModule,
    FormsModule,
    ReactiveFormsModule,
    NzMessageModule,
  ]
})
export class UserModule { }
