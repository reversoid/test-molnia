import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  { path: 'add', component: AddUserPageComponent },
  {
    path: 'users',
    component: UsersPageComponent,
    children: [
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
