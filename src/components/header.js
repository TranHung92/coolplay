import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import { dashboard, browse } from '../constants/pathnames';

function Login({ onLogin }) {
	return (
		<Link onClick={onLogin} to={dashboard}>
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

function Header({ currentUser, selectedGenre, onLogin, onLogout }) {
	return (
		<div className='header'>
			<SessionAction currentUser={currentUser} onLogin={onLogin} onLogout={onLogout} />
		</div>
		
	)
}

function mapStateToProps(state) {
	return {
		currentUser: state.auth.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onLogin: bindActionCreators(actions.login, dispatch),
		onLogout: bindActionCreators(actions.logout, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)