import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import UserBar from './userBar'
import LikePage from './likePage'
import Callback from './callback'
import Browse from './browse'
import { browse, likePage, callback } from '../constants/pathnames';
import Header from './header'

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<UserBar />
				<Switch>
					<Route exact path={`${browse}`} component={Browse} />
					<Route exact path={likePage} component={LikePage} />
					<Route exact path={callback} component={Callback} />
					<Redirect to={`${browse}`} />	
				</Switch>
			</div>
		)
	}
}