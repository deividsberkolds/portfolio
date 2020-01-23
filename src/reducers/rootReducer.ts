import { combineReducers } from 'redux';
import appReducer from 'reducers/app';
import navReducer from 'reducers/navigation';
import todoReducer from 'reducers/todo';

const rootReducer = combineReducers({
  app: appReducer,
  nav: navReducer,
  todo: todoReducer,
});

export default rootReducer;
