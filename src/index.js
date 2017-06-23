import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';

import SetWeather from './components/SetWeather';

const weatherFeed = [
  {
    high: '89',
    low: '22'
  },
  {
    high: '95',
    low: '22'
  }
]

const store = configureStore();
store.dispatch(actions.setWeather(weatherFeed));

ReactDOM.render(
  <Provider store={store}>
    <SetWeather />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();