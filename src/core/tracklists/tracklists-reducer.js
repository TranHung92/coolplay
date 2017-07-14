import { Map } from 'immutable'
import * as actionTypes from '../../_constants/actionTypes'
import { SESSION_TRACKLIST_ID } from '../constants'
import { tracklistReducer } from './tracklist-reducer'
import { Tracklist } from './tracklist'

export const initialState = new Map({
	currentTracklistId: SESSION_TRACKLIST_ID,
	[SESSION_TRACKLIST_ID]: new Tracklist({id: SESSION_TRACKLIST_ID, isNew: false})
})

export function tracklistsReducer(state = initialState, action) {
	const { payload } = action
	switch (action.type) {
		case actionTypes.FETCH_TRACKS_FULFILLED:
			return state.set(
				payload.tracklistId,
				tracklistReducer(state.get(payload.tracklistId), action)
			)
		case actionTypes.LOAD_FEATURED_TRACKS:
		case actionTypes.LOAD_USER_TRACKS:
		case actionTypes.LOAD_USER_FAVORITES:
			return state.merge({
				currentTracklistId: payload.tracklistId,
				[payload.tracklistId]: tracklistReducer(state.get(payload.tracklistId), action)
			})

		default:
			return state
	}
}