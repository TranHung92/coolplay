import * as actionTypes from '../../_constants/actionTypes'

export const playerActions = {
	playSelectedTrack: (trackId, tracklistId) => ({
		type: actionTypes.PLAY_SELECTED_TRACK,
		payload: {
			trackId,
			tracklistId
		}
	})
}