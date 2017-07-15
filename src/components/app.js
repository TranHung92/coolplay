import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { StickyContainer, Sticky } from 'react-sticky';

import Callback from './callback'
import HomePage from './pages/homePage'
import LikePage from './likePage'
import UserPage from './pages/userPage'
import { 
	likePage, 
	callback 
} from '../constants/pathnames';
import Footer from './footer'
import Header from './header'

export default class App extends Component {
	render() {
		return (
			<div>
				<Header className="header" />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path={likePage} component={LikePage} />
					<Route exact path='/users/:id/:section' component={UserPage} />
					<Route exact path={callback} component={Callback} />
					<Redirect to='/' />	
				</Switch>
				<Footer />				
			</div>

		)
	}
}