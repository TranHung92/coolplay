import * as actionTypes from '../constants/actionTypes';
import merge from 'lodash/fp/merge';

const initialState = {
  users: {},
  tracks: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.MERGE_ENTITIES:
      return mergeEntities(state, action);
    case actionTypes.SET_USER_ENTITIES:
      return setUserEntities(state, action)
    case actionTypes.SET_TRACK_ENTITIES:
      return setTrackEntities(state, action)
  }
  return state;
}

function mergeEntities(state, entities) {
  return merge(entities, state, {});
}

function setTrackEntities(state, action) {
  const { tracks } = action;
  return { ...state, tracks }
}

function setUserEntities(state, action) {
  const { users } = action;
  return { ...state, users }
}
