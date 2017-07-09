import { combineReducers } from 'redux';
import auth from './auth';
import player from './player';
import request from './request';
import paginate from './paginate';
import toggle from './toggle';
import entities from './entities';
import user from './user';


export default combineReducers({
  auth,
  player,
  request,
  paginate,
  toggle,
  entities,
  user
});
