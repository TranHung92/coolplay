import { Map } from 'immutable';
import * as actionTypes from '../../_constants/actionTypes';
import { createUser } from './user';


export const initialState = new Map({
  currentUserId: null
});


export function usersReducer(state = initialState, {payload, type}) {
  switch (type) {
    case actionTypes.FETCH_TRACKS_FULFILLED:
      return state.withMutations(users => {
        payload.data.forEach(trackData => {
          if (!users.has(trackData.user.id)) {
            users.set(trackData.user.id, createUser(trackData.user));
          }
        });
      });
    default:
      return state;
  }
}
