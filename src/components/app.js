import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Callback from './callback'
import Browse from './browse'
import LikePage from './likePage'
import UserPage from './userPage'
import { 
	browse, 
	likePage, 
	playlistsPage,
	streamPage, 
	callback 
} from '../constants/pathnames';
import Header from './header'

export default class App extends Component {
	render() {
		return (
			<div className="ui container">
				<Header />
				<Switch>
					<Route exact path={`${browse}`} component={Browse} />
					<Route exact path={likePage} component={LikePage} />
					<Route exact path='/users/:id/:section' component={UserPage} />
					<Route exact path={callback} component={Callback} />
					<Redirect to={`${browse}`} />	
				</Switch>
			</div>
		)
	}
}