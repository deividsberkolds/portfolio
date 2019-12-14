import { combineReducers } from 'redux';
import appReducer from 'reducers/app';
import navReducer from 'reducers/navigation';

const rootReducer = combineReducers({
  app: appReducer,
  nav: navReducer,
});

export default rootReducer;
