import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import RedditApp from './components/RedditApp'

import {Provider} from 'react-redux';

import configureStore from './configureStore';

const store = configureStore();


ReactDOM.render(
  <Provider store = {store}>
    <RedditApp /> 
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
