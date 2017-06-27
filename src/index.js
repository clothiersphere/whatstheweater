import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App'

import SetWeather from './components/SetWeather';
import { WUG_KEY } from './constants/wug_key';

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

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SetWeather} />
        <Route path="/" component={SetWeather} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();