import * as actionTypes from '../../constants/actionTypes'
import { tracklistIdForUserFavorites, tracklistIdForUserTracks } from './utils';

export const userActions = {
	loadUser: userId => ({
		type: actionTypes.LOAD_USER,
		payload: { userId: parseInt(userId, 10) }
	}),

	loadUserFavorites: userId => ({
		type: actionTypes.LOAD_USER_FAVORITES,
		payload: {
			tracklistId: tracklistIdForUserFavorites(userId),
			userId: parseInt(userId, 10)
		}
	}),

	loadUserTracks: userId => ({
		type: actionTypes.LOAD_USER_TRACKS,
		payload: {
			tracklistId: tracklistIdForUserTracks(userId),
			userId: parseInt(userId, 10)
		}
	}),

	fetchCurrentUser: (userId) => (dispatch) => {
		fetch(`https://api.soundcloud.com/users/${userId}?client_id=a281614d7f34dc30b665dfcaa3ed7505&`) 
			.then(res => res.json())
			.then(data => {
				console.log(data)
				dispatch({
					type: actionTypes.FETCH_USER,
					payload: data
				})
			})
	}
}
