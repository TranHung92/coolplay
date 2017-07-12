import { FEATURED_TRACKLIST_ID } from '../constants';
import * as actionTypes from '../../_constants/actionTypes'

export function loadFeaturedTracks() {
	return {
		type: actionTypes.LOAD_FEATURED_TRACKS,
		payload: {
			tracklistId: FEATURED_TRACKLIST_ID
		}
	}
}