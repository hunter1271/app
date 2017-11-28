import { createDuck } from 'redux-duck';
import { fromJS } from 'immutable';

const ducks = createDuck('jobList');

export const REQUEST = ducks.defineType('REQUEST');
export const SUCCESS = ducks.defineType('SUCCESS');
export const FAILURE = ducks.defineType('FAILURE');

export const request = ducks.createAction(REQUEST);
export const success = ducks.createAction(SUCCESS);
export const failure = ducks.createAction(FAILURE);

export const initialState = fromJS({
  items: [],
  loading: false,
});

export default ducks.createReducer(
  {
    [REQUEST]: (state) => state.set('loading', true),
    [SUCCESS]: (state, { payload }) =>
      state.set('loading', false).set('items', payload.items),
    [FAILURE]: (state) => state.set('loading', false),
  },
  initialState
);
