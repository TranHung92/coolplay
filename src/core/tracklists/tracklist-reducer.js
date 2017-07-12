import { List } from 'immutable'
import * as actionTypes from '../../_constants/actionTypes'
import { Tracklist } from './tracklist'

export function tracklistReducer(state = new Tracklist(), { type, payload }) {
	switch (type) {
		case actionTypes.FETCH_TRACKS_FULFILLED:
			return state.withMutations(tracklist => {
				tracklist
					.merge({
						isNew: false,
						isLoaded: true,
						isPending: false,
						nextUrl: payload.next_href || null,
						trackIds: mergeTrackIds(tracklist.trackIds, payload.data)
					})
			})
		case actionTypes.LOAD_FEATURED_TRACKS:
			return state.set('id', payload.tracklistId)


		default:
			return state
	}
}

function mergeTrackIds(trackIds, data) {
	let ids = trackIds.toJS();
	let newIds = data.reduce((list, trackData) => {
		if (ids.indexOf(trackData.id) === -1) {
			list.push(trackData.id)
		}
		return list
	}, []);
	return newIds.length ? new List(ids.concat(newIds)) : trackIds
}