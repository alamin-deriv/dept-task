import { put, takeLatest } from "redux-saga/effects";
import deptActionTypes from "../types";
import { fetchContentsSuccess, fetchContentsFail } from "../actions";
import httpClient from '../../../utils/http-client';

export function* fetchContents() {
  try {
    const response = yield httpClient.get("2d18066b-3469-4aac-add9-e457ee65859e");
    yield put(fetchContentsSuccess(response?.data));
  } catch (error) {

    yield put(fetchContentsFail(error?.message));

  }
}

export function* onFetchContentsStart() {
  yield takeLatest(deptActionTypes.FETCH_CONTENT_START, fetchContents);
}

