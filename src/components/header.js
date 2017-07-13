import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../core/auth';
import { likePage, browse } from '../constants/pathnames';

function Login({ onLogin }) {
	return (
		<Link onClick={onLogin} to={likePage}>
			Login
		</Link>
	)
}

function Logout({ onLogout }) {
  return (
    <Link onClick={onLogout} to={browse}>
      Logout
    </Link>
  );
}

function SessionAction({ currentUser, onLogin, onLogout }) {
	return (
		<div>
			{ currentUser ? <Logout onLogout={onLogout} /> : <Login onLogin={onLogin} />}
		</div>
	)
}

function Header({ currentUser, onLogin, onLogout }) {
	console.log('hello',currentUser)
	return (
		<div className='header'>
			<SessionAction currentUser={currentUser} onLogin={onLogin} onLogout={onLogout} />
		</div>
		
	)
}

function mapStateToProps(state) {
	return {
		currentUser: state.auth
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onLogin: bindActionCreators(authActions.login, dispatch),
		onLogout: bindActionCreators(authActions.logout, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)