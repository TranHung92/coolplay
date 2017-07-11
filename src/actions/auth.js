import Cookies from 'js-cookie';
import { CLIENT_ID, REDIRECT_URI, OAUTH_TOKEN } from '../constants/auth';
import * as actions from '../constants/actionTypes';
import { apiUrl } from '../services/api';
import { fetchFavorites, fetchStream } from '../actions/user'

export const login = () => (dispatch) => {
	const client_id = CLIENT_ID;
	const redirect_uri = REDIRECT_URI;
	/* eslint-disable no-undef */
	SC.initialize({ client_id, redirect_uri });
	SC.connect().then((session) => {
		Cookies.set(OAUTH_TOKEN, session.oauth_token);
		dispatch(setSession(session));
		dispatch(fetchUser());
	})
  /* eslint-enable no-undef */	
} 

export const logout = () => (dispatch) => {
  Cookies.remove(OAUTH_TOKEN);
  dispatch(resetSession());
};

const fetchUser = () => (dispatch) => {
	fetch(apiUrl(`me`, '?'))
		.then(response => response.json())
		.then(me => {
			dispatch(setUser(me));
			dispatch(fetchFavorites(me));
		});
}

function setUser(user) {
	return {
		type: actions.SET_USER,
		user
	}
}

function setSession(session) {
	return {
		type: actions.SET_SESSION,
		session
	}
}

export function resetSession() {
  return {
    type: actions.RESET_SESSION
  };
}