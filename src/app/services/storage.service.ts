import { Injectable } from '@angular/core';
import { IUser } from '../Types/types';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public getUsers(): IUser[] {
    const localUsers = localStorage.getItem('users');
    if (!localUsers) return [];
    return JSON.parse(localUsers);
  }

  public setUsers(users: IUser[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }
}
