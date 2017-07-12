import axios from 'axios'

import { loadFeaturedTracks } from '../core/tracklists/actions'
import * as actionTypes from '../_constants/actionTypes'
import { FEATURED_TRACKLIST_ID } from '../core/constants';

export const tracklistActions = {
	FETCH_TRACKS_FULFILLED: 'FETCH_TRACKS_FULFILLED'
}

// export function fetchTracksFulfilled() {
// 	const request = axios.get('http://api.soundcloud.com/users/3207/tracks?client_id=a281614d7f34dc30b665dfcaa3ed7505')
// 	console.log('fetch tracks fulfilled', request)
// 	return {
// 		type: tracklistAction.FETCH_TRACKS_FULFILLED,
// 		payload: request
// 	}
// }
export function fetchTracksFulfilled() {
	return dispatch => {
		axios.get('https://api.soundcloud.com/users/185676792/favorites?client_id=d02c42795f3bcac39f84eee0ae384b00&')
			.then(res => {
				console.log(res)
				dispatch({
					type: actionTypes.LOAD_FEATURED_TRACKS,
					payload: {
						tracklistId: FEATURED_TRACKLIST_ID
					}
				})
				dispatch({
					type: tracklistActions.FETCH_TRACKS_FULFILLED,
					payload: res
				})
				
			})
	}
}

export function fetchTracks(data) {
	return {
		type: tracklistAction.FETCH_TRACKS_FULFILLED,
		payload: data
	}
}