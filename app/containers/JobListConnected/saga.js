import { call, put, select, takeLatest } from 'redux-saga/effects';

import { JOB_LIST_REQUEST, JOB_LIST_SUCCESS } from './constants';
import { jobListRequest, jobListSuccess } from './actions';

export function* loadJobs() {
  yield put(jobListSuccess(['new job1', 'new job2']));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* jobListData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  console.log('root saga');

  yield takeLatest(JOB_LIST_REQUEST, loadJobs);
}
