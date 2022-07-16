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

export const update = createAction(
  '[User Component] update',
  props<{ id: number, newData: IUserPayload }>()
);

export const loadMock = createAction(
  '[User Component] loadMock'
);
