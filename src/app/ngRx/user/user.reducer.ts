import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/Types/types';
import { mockUsers } from './mock';
import { add, loadMock, remove, update } from './user.actions';


export const initialState: IUser[] = mockUsers;
let userCounter = initialState.length + 1;

export const userReducer = createReducer(
  initialState,
  on(add, (state, {user}) => [...state, {...user, id: userCounter++}]),
  on(remove, (state, {id}) => state.filter((user) => user.id !== id)),
  on(update, (state, {id, newData}) => {
    const index = state.findIndex((user) => user.id === id);
    if (index === -1) return state;

    const idToSave = state[index].id;
    const newState = [...state];
    newState[index] = {...newData, id: idToSave};    
    return newState;
  }),

  on(loadMock, () => mockUsers),
);