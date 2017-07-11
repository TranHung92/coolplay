import { Map } from 'immutable';
import { tracklistActions } from '../actions/tracklists';
import { createTrack } from '../records/track';


export default function tracks(state = new Map(), action) {
  switch (action.type) {
    case tracklistActions.FETCH_TRACKS_FULFILLED:
      return state.withMutations(tracks => {
        action.payload.data.forEach(trackData => {
          tracks.set(trackData.id, createTrack(trackData));
        });
      });

    default:
      return state;
  }
}
