import axios from 'axios'

import { FEATURED_TRACKLIST_ID } from '../constants';
import * as actionTypes from '../../_constants/actionTypes'



export function fetchFeaturedTracks(tracklistId) {
	return dispatch => {
		axios.get('https://api.soundcloud.com/users/134910968/favorites?client_id=a281614d7f34dc30b665dfcaa3ed7505&')
			.then(res => {
				dispatch({
					type: actionTypes.LOAD_FEATURED_TRACKS,
					payload: {
						tracklistId: FEATURED_TRACKLIST_ID
					}
				})
				dispatch({
					type: actionTypes.FETCH_TRACKS_FULFILLED,
					payload: { ...res, tracklistId }
				})		
			})
	}
}

export function fetchUserTracks(userId, section) {
	const tracklistId = `users/${userId}/${section}`
	return dispatch => {
		axios.get(`https://api.soundcloud.com/users/${userId}/${section}?client_id=a281614d7f34dc30b665dfcaa3ed7505&`)
			.then(res => {
				dispatch({
					type: actionTypes.FETCH_TRACKS_FULFILLED,
					payload: { ...res, tracklistId}
				})
				//dispatch(loadUserTracks(userId, section))
			})
	}
}

function loadUserTracks(userId, section) {
	if (section === 'tracks') {
		console.log('hellllo tracks')
		return {
			type: actionTypes.LOAD_USER_TRACKS,
			payload: {
				tracklistId: `users/${userId}/tracks`,
				userId: parseInt(userId, 10)
			}
		}
	} else {
		return {
			type: actionTypes.LOAD_USER_FAVORITES,
			payload: {
				tracklistId: `users/${userId}/favorites`,
				userId: parseInt(userId, 10)
			}
		}
	}
}

export function fetchTracks(data) {
	return {
		type: actionTypes.FETCH_TRACKS_FULFILLED,
		payload: data
	}
}

export function loadFeaturedTracks() {
	return {
		type: actionTypes.LOAD_FEATURED_TRACKS,
		payload: {
			tracklistId: FEATURED_TRACKLIST_ID
		}
	}
}
