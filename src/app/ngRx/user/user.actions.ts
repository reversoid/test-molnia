import { createAction, props } from '@ngrx/store';
import { IUserPayload } from 'src/app/Types/types';

export const add = createAction(
  '[User Component] Add',
  props<{ user: IUserPayload }>()
);

export const remove = createAction(
  '[User Component] Remove',
  props<{ id: number }>()
);
