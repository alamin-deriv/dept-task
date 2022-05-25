import { all, call } from "redux-saga/effects";
import { DeptSagas } from './dept/sagas';


export default function* rootSaga() {
  yield all([

    call(DeptSagas),

  ]);
};
