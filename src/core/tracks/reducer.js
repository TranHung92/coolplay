import { Map } from 'immutable';
import * as actionTypes from '../../constants/actionTypes';
import { createTrack } from './track';


export function tracksReducer(state = new Map(), action) {
  switch (action.type) {
    case actionTypes.FETCH_TRACKS_FULFILLED:
      return state.withMutations(tracks => {
        action.payload.data.forEach(trackData => {
          tracks.set(trackData.id, createTrack(trackData));
        });
      });

    default:
      return state;
  }
}
