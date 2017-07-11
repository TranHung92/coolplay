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
      dispatch(mergeEntities(normalized.entities));
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

function receiveAccessToken(accessToken) {
  return {
    type: actionTypes.RECEIVE_ACCESS_TOKEN,
    accessToken
  }
} 

