import { combineReducers } from 'redux';
import auth from './auth';
import player from './player';
import request from './request';
import paginate from './paginate';
import entities from './entities';
import user from './user';
import track from './track'


export default combineReducers({
  auth,
  player,
  request,
  paginate,
  entities,
  user,
  track
});
