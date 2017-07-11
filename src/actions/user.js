import { arrayOf, normalize } from 'normalizr'

import * as requestTypes from '../constants/requestTypes'
import * as actionTypes from '../constants/actionTypes'
import * as paginateLinkTypes from '../constants/paginateLinkTypes';
import { getLazyLoadingUsersUrl } from '../services/api'
import { mergeEntities } from './entities'
import { setPaginateLink } from './paginate'
import { setRequestInProcess } from './request'
import userSchema from '../schemas/user'
import trackSchema from '../schemas/track'

export const fetchFavorites = (user, nextHref) => (dispatch, getState) => {
  const requestType = requestTypes.FAVORITES;
  const url = getLazyLoadingUsersUrl(user, nextHref, 'favorites?linked_partitioning=1&limit=20&offset=0');
  const requestInProcess = getState().request[requestType];

  if (requestInProcess) { return; }

  dispatch(setRequestInProcess(true, requestType));

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const normalized = normalize(data.collection, arrayOf(trackSchema));
      // dispatch(mergeEntities(normalized.entities));
      dispatch(setUserEntities(normalized.entities.users))
      dispatch(setTrackEntities(normalized.entities.tracks))
      dispatch(mergeFavorites(normalized.result));
      dispatch(setPaginateLink(data.next_href, paginateLinkTypes.FAVORITES));
      dispatch(setRequestInProcess(false, requestType));
    });
};

export function mergeFavorites(favorites) {
	return {
		type: actionTypes.MERGE_FAVORITES,
		favorites
	}
}

export function setUserEntities(users) {
  return {
    type: actionTypes.SET_USER_ENTITIES,
    users
  }
}

export function setTrackEntities(tracks) {
  return {
    type: actionTypes.SET_TRACK_ENTITIES,
    tracks
  }
}

export const fetchStream = () => (dispatch, getState) => {
  const requestType = requestTypes.STREAM;
  const tempAccessToken = '1-136957-134910968-0a68625b07f20'
  const url = `https://api.soundcloud.com/me/activities?limit=10&oauth_token=${tempAccessToken}`
  const requestInProcess = getState().request[requestType];
  if (requestInProcess) { return; }

  dispatch(setRequestInProcess(true, requestType));
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const normalized = normalize(data.collection, arrayOf(trackSchema));
      dispatch(mergeEntities(normalized.entities));
      dispatch(setRequestInProcess(false, requestType));
    })
}