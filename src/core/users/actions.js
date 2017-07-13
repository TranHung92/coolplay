import * as actionTypes from '../../_constants/actionTypes'
import { tracklistIdForUserLikes, tracklistIdForUserTracks } from './utils';

export const userActions = {
	loadUser: userId => ({
		type: actionTypes.LOAD_USER,
		payload: { userId }
	}),

	loadUserLikes: userId => ({
		type: actionTypes.LOAD_USER_LIKES,
		payload: {
			tracklistId: tracklistIdForUserLikes(userId),
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