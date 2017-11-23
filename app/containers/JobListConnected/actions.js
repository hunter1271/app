import { JOB_LIST_REQUEST, JOB_LIST_SUCCESS } from './constants';

export function jobListRequest() {
  return {
    type: JOB_LIST_REQUEST,
  };
}

export function jobListSuccess(items) {
  return {
    type: JOB_LIST_SUCCESS,
    items,
  };
}
