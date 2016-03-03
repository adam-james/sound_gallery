import 'babel-polyfill';
import 'file?name=[name].[ext]!./index.html';
import './scss/application.scss';
import React from 'react';
import { render } from 'react-dom';
import SC from 'soundcloud';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { SOUNDCLOUD_CLIENT_ID } from './config';

SC.initialize({
  client_id: SOUNDCLOUD_CLIENT_ID
});

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
