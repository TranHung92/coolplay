import { combineReducers } from 'redux-immutable';

import { authReducer } from './auth';
import { tracksReducer } from './tracks'
import { usersReducer } from './users'
import { tracklistsReducer } from './tracklists'

export default combineReducers({
  auth: authReducer,
  tracks: tracksReducer,
  users: usersReducer,
  tracklists: tracklistsReducer,

});
