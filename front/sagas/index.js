import { all, fork } from 'redux-saga/effects';

import userSaga from './user';

export default function* rootReducer() {
  yield all([fork(userSaga)]);
}
