import { call, getContext, put, takeLatest, select } from 'redux-saga/effects';
import { emailSelector, passwordSelector } from './selectors';
import { REQUEST, success } from './ducks';

export default function* () {
  yield takeLatest(REQUEST, requestSaga);
}

export function* requestSaga() {
  const api = yield getContext('api');
  const email = yield select(emailSelector);
  const password = yield select(passwordSelector);

  const response = yield call(api.signIn.signIn, email, password);

  yield put(success(response.userData));
}
