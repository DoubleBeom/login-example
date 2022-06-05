import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';

import {
  // 로그인
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,

  // 로그 아웃
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
} from '../reducers/user';

function loginAPI(data) {
  return axios.post('/api/login', data);
}

function* login(action) {
  try {
    console.log('saga login');
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
