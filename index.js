import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import geoNewsApp from './reducers';
import { fetchNews } from './actions/index';

const store = createStore(geoNewsApp, {}, compose(
      applyMiddleware(thunkMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


store.dispatch(fetchNews());
setInterval(() => {
  store.dispatch(fetchNews());
}, 30000);
