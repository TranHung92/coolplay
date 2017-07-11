import * as actions from '../constants/actionTypes';

const initialState = {
	session: null,
	user: null,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case actions.SET_USER:
			return setUser(state, action);
		case actions.SET_SESSION:
			return setSession(state, action);
		case actions.RESET_SESSION:
			return initialState
		default:
			return state;
	}
}

function setUser(state, action) {
	const { user } = action;
	return { ...state, user };
}

function setSession(state, action) {
	const { session } = action;
	return { ...state, session };
}