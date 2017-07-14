/* eslint-disable*/
import SC from 'soundcloud';
/* eslint-enable*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './core/store';

import App from './components/app';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
  , document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}