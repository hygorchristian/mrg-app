import { all, takeLatest } from 'redux-saga/effects';

import { PlayerTypes } from '../ducks/player';
import { init, setPodcast, next, pause, play, prev, reset } from './player';

export default function*() {
  return yield all([
    init(),

    takeLatest(PlayerTypes.SET_TRACK, setPodcast),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.PREV, prev),
    takeLatest(PlayerTypes.NEXT, next),
    takeLatest(PlayerTypes.RESET, reset),
  ]);
}
