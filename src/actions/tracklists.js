import axios from 'axios'

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
		axios.get('http://api.soundcloud.com/users/3207/tracks?client_id=a281614d7f34dc30b665dfcaa3ed7505')
			.then(res => {
				console.log(res)
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