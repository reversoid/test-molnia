import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {path: 'add', component: AddUserPageComponent},
  {path: 'users', component: UsersPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
