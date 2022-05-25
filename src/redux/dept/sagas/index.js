import { all, call } from 'redux-saga/effects';
import { onFetchContentsStart } from './fetchContent';




export function* DeptSagas() {
  yield all([
    call(onFetchContentsStart),
  ]);
};
