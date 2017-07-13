import { Record } from 'immutable'
import * as actionTypes from '../../_constants/actionTypes'

const PlayerState = new Record({
	isPlaying: false,
	trackId: null,
	tracklistId: "session",
	volume: 10
})

export function playerReducer(state = new PlayerState(), {payload, type}) {
	switch (type) {
		case actionTypes.PLAY_SELECTED_TRACK:
			return {
				trackId: payload.trackId,
				tracklistId: payload.tracklistId || state.get('tracklistId')
			}
			
		default: 
			return state
	}
}
