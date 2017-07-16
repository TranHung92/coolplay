import * as actionTypes from '../../constants/actionTypes'

//import { getPlayerTrack, getPlayerTracklistCursor } from './selectors';
import { audio } from './audio-service';

export const playerActions = {
	playSelectedTrack: (track, tracklistId) => dispatch => {
		audio.load(track.streamUrl)
		audio.play()
		dispatch({
			type: actionTypes.PLAY_SELECTED_TRACK,
			payload: {
				track,
				tracklistId
			}
		})
	}

	
}