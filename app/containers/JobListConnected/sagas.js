import { call, getContext, put, takeLatest } from 'redux-saga/effects';
import { REQUEST, success } from './ducks';

export default function* () {
  yield takeLatest(REQUEST, requestSaga);
}

export function* requestSaga() {
  const api = yield getContext('api');
  const response = yield call(api.signIn.signIn);

  yield put(success(response));
}
