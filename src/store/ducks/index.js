import { combineReducers } from 'redux';

import { PodcastsReducer as podcasts } from './podcasts';
import { PlayerReducer as player } from './player';
import { AppReducer as app } from './app';

export default combineReducers({
  app,
  podcasts,
  player,
});
