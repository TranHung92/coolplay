import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Dashboard from './dashboard'
import Callback from './callback'
import Browse from './browse'
import { browse, dashboard, callback } from '../constants/pathnames';
import Header from './header'

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path={`${browse}`} component={Browse} />
					<Route exact path={dashboard} component={Dashboard} />
					<Route exact path={callback} component={Callback} />
					<Redirect to={`${browse}`} />	
				</Switch>
			</div>
		)
	}
}