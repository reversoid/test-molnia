import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddUserPageComponent } from 'src/app/pages/add-user-page/add-user-page.component';
import { UserFormComponent } from 'src/app/components/user-form/user-form.component';
import { UsersPageComponent } from 'src/app/pages/users-page/users-page.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';


@NgModule({
  declarations: [
    UserFormComponent,
    AddUserPageComponent,
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    NzTypographyModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzUploadModule,
    NzIconModule,
    NzRadioModule,
  ]
})
export class UserModule { }
