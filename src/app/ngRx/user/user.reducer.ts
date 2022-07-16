import { createReducer, on } from '@ngrx/store';
import { StorageService } from 'src/app/modules/user/services/storage.service';
import { IUser } from 'src/app/modules/user/Types/types';
import { mockUsers } from './mock';
import { add, loadMock, remove, update } from './user.actions';

const storage = new StorageService();

export const initialState: IUser[] = storage.getUsers();
let userCounter = initialState.length + 1;

export const userReducer = createReducer(
  initialState,
  on(add, (state, {user}) => {
    const newState = [...state, {...user, id: userCounter++}];
    storage.setUsers(newState);
    return newState;
  }),

  on(remove, (state, {id}) => {
    const newState = state.filter((user) => user.id !== id);
    storage.setUsers(newState);
    return newState;
  }),

  on(update, (state, {id, newData}) => {
    const index = state.findIndex((user) => user.id === id);
    if (index === -1) return state;

    const idToSave = state[index].id;
    const newState = [...state];
    newState[index] = {...newData, id: idToSave};
    storage.setUsers(newState);
    return newState;
  }),

  on(loadMock, () => {
    const newState = mockUsers;
    storage.setUsers(newState);
    if (userCounter <= newState.length) userCounter = newState.length + 1;
    return newState;
  }),
);