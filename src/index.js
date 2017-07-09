import React from 'react';
import SC from 'soundcloud';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './stores/configureStore';

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

module.hot.accept();