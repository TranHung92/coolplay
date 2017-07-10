import * as actions from '../constants/actionTypes';

const initialState = {
	session: null,
	user: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case actions.SET_USER:
			return setUser(state, action.user);
		case actions.SET_SESSION:
			return setSession(state, action.session);
		case actions.RESET_SESSION:
			return initialState
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