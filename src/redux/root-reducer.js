import { combineReducers } from "redux";
import deptReducer from './dept/reducer';


const rootReducer = combineReducers({
  dept: deptReducer,

});

export default rootReducer;
