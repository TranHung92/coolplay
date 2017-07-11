import { combineReducers } from 'redux';
import auth from './auth';
import player from './player';
import request from './request';
import entities from './entities';
import user from './user';
import track from './track'
import tracks from './tracks'



export default combineReducers({
  auth,
  player,
  request,
  entities,
  user,
  track,
  tracks,

});
