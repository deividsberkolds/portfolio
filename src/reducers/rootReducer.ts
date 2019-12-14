import { combineReducers } from 'redux';
import appReducer from './app';
import navReducer from './navigation';

const rootReducer = combineReducers({
  app: appReducer,
  nav: navReducer,
});

export default rootReducer;
