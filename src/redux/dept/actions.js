import deptActionTypes from "./types";


export const fetchContentsStart = () => ({
  type: deptActionTypes.FETCH_CONTENT_START
});

export const fetchContentsSuccess = (data) => ({
  type: deptActionTypes.FETCH_CONTENT_SUCCESS,
  payload: data,
});

export const fetchContentsFail = (error) => ({
  type: deptActionTypes.FETCH_CONTENT_FAIL,
  payload: error,
});



