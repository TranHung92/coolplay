import { createSelector } from 'reselect';
//import { TRACKS_PER_PAGE } from '../constants';
import { getTracks } from '../tracks';


export function getTracklists(state) {
  return state.tracklists;
}

export function getTracklistById(state, tracklistId) {
  return getTracklists(state).get(tracklistId);
}

export function getCurrentTracklist(state) {
  let tracklists = getTracklists(state);
  return tracklists.get(tracklists.get('currentTracklistId'));
}

export const getTracklistLoaded = createSelector(
  getTracklists,
  tracklists => tracklists.get('tracklistLoaded')
);

export function getTracklistCursor(selectedTrackId, trackIds) {
  let index = trackIds.indexOf(selectedTrackId);
  let nextTrackId = null;
  let previousTrackId = null;

  if (index !== -1) {
    if (index < trackIds.size - 1) nextTrackId = trackIds.get(index + 1);
    if (index > 0) previousTrackId = trackIds.get(index - 1);
  }

  return {
    nextTrackId,
    previousTrackId,
    selectedTrackId
  };
}


//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getCurrentPage = createSelector(
  getCurrentTracklist,
  tracklist => tracklist.currentPage
);

export const getCurrentTrackIds = createSelector(
  getCurrentTracklist,
  tracklist => tracklist.trackIds
);

export const getTracklistStatus = createSelector(
  getCurrentTracklist,
  tracklist => tracklist.isLoaded
)

export const getTracksForCurrentTracklist = createSelector(
  getCurrentTrackIds,
  getTracks,
  ( trackIds, tracks) => {
    return trackIds
      .map(id => tracks.get(id));
  }
);
