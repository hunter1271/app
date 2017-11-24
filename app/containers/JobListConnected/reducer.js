import { fromJS } from 'immutable';

import { JOB_LIST_REQUEST, JOB_LIST_SUCCESS } from './constants';

const initialState = fromJS({
  items: ['initial'],
  loading: false,
});

function jobListReducer(state = initialState, action) {
  switch (action.type) {
    case JOB_LIST_REQUEST:
      return state.setIn(['loading'], true);
    case JOB_LIST_SUCCESS:
      return state.setIn(['items'], action.items);
    default:
      return state;
  }
}

export default jobListReducer;
