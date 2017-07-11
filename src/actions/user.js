import { arrayOf, normalize } from 'normalizr'

import * as requestTypes from '../constants/requestTypes'
import * as actionTypes from '../constants/actionTypes'
import { getLazyLoadingUsersUrl } from '../services/api'
import { mergeEntities } from './entities'
import { setRequestInProcess } from './request'
import userSchema from '../schemas/user'
import trackSchema from '../schemas/track'

import Cookies from 'js-cookie';
import { CLIENT_ID, REDIRECT_URI, OAUTH_TOKEN } from '../constants/auth';

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

export const onFetchStream = () => (dispatch, getState) => {
  const requestType = requestTypes.STREAM;
  const tempAccessToken = '1-136957-134910968-0a68625b07f20'
  const url = `https://api.soundcloud.com/me/activities?limit=10&oauth_token=${tempAccessToken}`
  const requestInProcess = getState().request[requestType];
  if (requestInProcess) { return; }
  console.log('fetch stream')
  dispatch(setRequestInProcess(true, requestType));
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const normalized = normalize(data.collection, arrayOf(trackSchema));
      dispatch(setUserEntities(normalized.entities.users))
      dispatch(setTrackEntities(normalized.entities.tracks))
      dispatch(setRequestInProcess(false, requestType));
    })
}

export const fetchStream = () => (dispatch) => {
  const client_id = CLIENT_ID;
  const redirect_uri = REDIRECT_URI;
  /* eslint-disable no-undef */
  SC.initialize({ client_id, redirect_uri });
  SC.connect().then((session) => {
    Cookies.set(OAUTH_TOKEN, session.oauth_token);
    dispatch(onFetchStream())
  })
  /* eslint-enable no-undef */  
} 