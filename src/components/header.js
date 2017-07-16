import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';

import { getAuthedUser } from '../core/users';
import * as authActions from '../core/auth';
import { likePage } from '../constants/pathnames';

function Login({ onLogin }) {
	return (
		<Link onClick={onLogin} to={likePage}>
			Login
		</Link>
	)
}

function Logout({ onLogout }) {
  return (
    <Link onClick={onLogout} to='/'>
      Logout
    </Link>
  );
}

function SessionAction({ currentUser, onLogin, onLogout }) {
	return (
		<div className="ui massive inverted menu">
			<div className="ui container">
				<div className="item">
					<Link to='/'>CoolPlay</Link>
				</div>
				<div className="right menu item">
					{ currentUser ? <Logout onLogout={onLogout} /> : <Login onLogin={onLogin} />}
				</div>				
			</div>
		</div>
	)
}

function Header({ user, onLogin, onLogout }) {
	return (
		<div className="header menu">
			<SessionAction currentUser={user} onLogin={onLogin} onLogout={onLogout} />
		</div>
		
	)
}

// function mapStateToProps(state) {
// 	return {
// 		users: state.get('users')
// 	}
// }

const mapStateToProps = createSelector(
	getAuthedUser,
	user => ({user})
)

function mapDispatchToProps(dispatch) {
	return {
		onLogin: bindActionCreators(authActions.login, dispatch),
		onLogout: bindActionCreators(authActions.logout, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)