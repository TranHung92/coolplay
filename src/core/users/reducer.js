import { Map } from 'immutable';
import * as actionTypes from '../../constants/actionTypes';
import { createUser } from './user';


export const initialState = new Map({
  currentUserId: null,
  authedUserId: null,
});


export function usersReducer(state = initialState, {payload, type}) {
  switch (type) {
    case actionTypes.FETCH_USER:
      return state.withMutations(users => {
        if (!users.has(payload.id)) {
          users.set(payload.id, createUser(payload))
        }
      })
    case actionTypes.SET_ME:
      return state
        .withMutations(users => users.set(payload.id, createUser(payload)))
        .set('authedUserId', payload.id)
    case actionTypes.LOAD_USER:
      return state.set('currentUserId', payload.userId)    
    default:
      return state;
  }
}
