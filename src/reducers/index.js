import { combineReducers } from 'redux-immutable';
import auth from './auth';


import { tracksReducer } from '../core/tracks'
import { usersReducer } from '../core/users'
import { tracklistsReducer } from '../core/tracklists'

export default combineReducers({
  auth,
  tracks: tracksReducer,
  users: usersReducer,
  tracklists: tracklistsReducer,

});
