import { createDuck } from 'redux-duck';
import { fromJS } from 'immutable';

const ducks = createDuck('SignIn');

export const REQUEST = ducks.defineType('REQUEST');
export const SUCCESS = ducks.defineType('SUCCESS');
export const FAILURE = ducks.defineType('FAILURE');

export const request = ducks.createAction(REQUEST);
export const success = ducks.createAction(SUCCESS);
export const failure = ducks.createAction(FAILURE);

export const initialState = fromJS({
  userData: null,
  email: null,
  password: null,
  loading: false,
  error: null,
});

export default ducks.createReducer(
  {
    [REQUEST]: (state, { payload }) =>
      state
        .set('loading', true)
        .set('email', payload.email)
        .set('password', payload.password),
    [SUCCESS]: (state, { payload }) =>
      state.set('loading', false).set('userData', payload.userData),
    [FAILURE]: (state, { payload }) =>
      state.set('loading', false).set('error', payload.error),
  },
  initialState
);
