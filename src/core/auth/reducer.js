import { Map } from 'immutable'

import * as actions from '../../_constants/actionTypes';

const initialState = new Map({
	session: null,
});

export function authReducer(state = initialState, action) {
	switch (action.type) {
		case actions.SET_SESSION:
			return state.set('session', action.payload);
		case actions.RESET_SESSION:
			return initialState
		default:
			return state;
	}
}

