import login_Reducer from './login';
import register_Reducer from './Register';
import class_Reducer from './class';
import manage_Reducer from './manageStudent';
//import todo_Reducer from './Todo';

import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  login_Reducer,
  register_Reducer,
  class_Reducer,
  manage_Reducer
  //todo_Reducer
});

export default rootReducer;
