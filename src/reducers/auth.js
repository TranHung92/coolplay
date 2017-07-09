import * as actions from '../constants/actionTypes';

const initialState = {
	session: null,
	user: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case actions.SET_USER:
			return setUser(state, action.session);
		case actions.SET_SESSION:
			return setSession(state, action.user);
		default:
			return state;
	}
}

function setSession(state, session) {
	return { ...state, session };
}

function setUser(state, user) {
	return { ...state, user }
}