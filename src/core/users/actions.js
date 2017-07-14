import * as actionTypes from '../../_constants/actionTypes'
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
			userId
		}
	}),

	loadUserTracks: userId => ({
		type: actionTypes.LOAD_USER_TRACKS,
		payload: {
			tracklistId: tracklistIdForUserTracks(userId),
			userId
		}
	}),


 
}


