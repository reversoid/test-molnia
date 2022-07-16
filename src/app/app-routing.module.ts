import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserPageComponent } from 'src/app/modules/user/pages/add-user-page/add-user-page.component';
import { EditPageComponent } from 'src/app/modules/user/pages/edit-page/edit-page.component';
import { UsersPageComponent } from 'src/app/modules/user/pages/users-page/users-page.component';

const routes: Routes = [
  { path: 'add', component: AddUserPageComponent },
  {
    path: 'users',
    children: [
      { path: '', component: UsersPageComponent },
      { path: ':id', component: EditPageComponent }],
  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: 'users',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
