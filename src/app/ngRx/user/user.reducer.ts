import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/Types/types';
import { add, remove } from './user.actions';


export const initialState: IUser[] = [];
let userCounter = 1;

export const userReducer = createReducer(
  initialState,
  on(add, (state, {user}) => [...state, {...user, id: userCounter++}]),
  on(remove, (state, {id}) => state.filter((user) => user.id !== id)),
);