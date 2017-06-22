import React from 'react';
import ReactDOM from 'react-dom';
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
  <SetWeather />,
  document.getElementById('app')
);

module.hot.accept();