import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from 'components/App';
import rootReducer from 'reducers/rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const reduxDevDebugger = (env: string) => {
  return env === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null;
};

const store = createStore(rootReducer, reduxDevDebugger(process.env.NODE_ENV));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
