import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/Types/types';
import { mockUsers } from './mock';
import { add, remove } from './user.actions';


export const initialState: IUser[] = mockUsers;
let userCounter = mockUsers.length + 1;

export const userReducer = createReducer(
  initialState,
  on(add, (state, {user}) => [...state, {...user, id: userCounter++}]),
  on(remove, (state, {id}) => state.filter((user) => user.id !== id)),
);