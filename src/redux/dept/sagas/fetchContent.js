import { put, takeLatest } from "redux-saga/effects";
import deptActionTypes from "../types";
import { fetchContentsSuccess, fetchContentsFail } from "../actions";
import httpClient from '../../../utils/http-client';

export function* fetchContents() {
  try {
    const response = yield httpClient.get("50ba4a2a-ef63-4dc4-ab39-71ad1de2b457");
    yield put(fetchContentsSuccess(response?.data));
  } catch (error) {

    yield put(fetchContentsFail(error?.message));

  }
}

export function* onFetchContentsStart() {
  yield takeLatest(deptActionTypes.FETCH_CONTENT_START, fetchContents);
}

