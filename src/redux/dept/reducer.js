import { persistReducer } from "redux-persist";
import storage from "localforage";
import deptActionTypes from "./types";

const INITIAL_STATE = {
  isLoading: false,
  listOfContents: [],

};

function deptReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {


    case deptActionTypes.FETCH_CONTENT_START:
      return {
      isLoading: true,
        ...state,
      };

    case deptActionTypes.FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listOfContents: payload,
      };
    case deptActionTypes.FETCH_CONTENT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

 
    default:
      return state;
  }
}

const persistConfig = {
  key: "dept",
  storage,
  blacklist: [
    "error",
    "isLoading",
  ],
};

export default persistReducer(persistConfig, deptReducer);
