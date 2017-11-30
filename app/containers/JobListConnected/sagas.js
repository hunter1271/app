import { call, getContext, put } from 'redux-saga/effects';
import { success } from './ducks';

export default function* () {
  // yield takeLatest(REQUEST, requestSaga);

  yield call(requestSaga);
}

export function* requestSaga() {
  const api = yield getContext('api');
  const response = yield call(api.jobList.jobList);

  yield put(success(response));
}
