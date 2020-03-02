import { call, put, select, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import TrackPlayer, { Track } from 'react-native-track-player';

import { PlayerActions } from '../ducks/player';

function* trackChanged() {
  const channel = eventChannel(emitter => {
    const onTrackChange = TrackPlayer.addEventListener(
      'playback-track-changed',
      emitter
    );

    return () => onTrackChange.remove();
  });

  // try {
  //   while (true) {
  //     const { nextTrack } = yield take(channel);
  //     yield put(PlayerActions.setTrack(nextTrack));
  //   }
  // } finally {
  //   channel.close();
  // }
}

export function* init() {
  yield call(TrackPlayer.setupPlayer, {
    maxBuffer: 120,
    backBuffer: 50,
  });

  TrackPlayer.updateOptions({
    jumpInterval: 10,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      // TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      // TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_STOP,
      TrackPlayer.CAPABILITY_JUMP_FORWARD,
      TrackPlayer.CAPABILITY_JUMP_BACKWARD,
    ],
    notificationCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      // TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      // TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_JUMP_FORWARD,
      TrackPlayer.CAPABILITY_JUMP_BACKWARD,
    ],
    compactCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
    ],
  });

  TrackPlayer.addEventListener('playback-state', () => {});
}

export function* setPodcast({ track }) {
  const { podcastsPosition } = yield select(state => state.podcasts);

  yield call(TrackPlayer.stop);
  yield call(TrackPlayer.reset);
  //
  yield call(TrackPlayer.add, [track, track, track]);
  //
  yield put(PlayerActions.play());

  if (podcastsPosition[track.id]) {
    yield call(TrackPlayer.seekTo, podcastsPosition[track.id].position);
  }

  yield call(trackChanged);
}

export function* play() {
  yield call(TrackPlayer.play);
}

export function* pause() {
  yield call(TrackPlayer.pause);
}

export function* prev() {
  const player = yield select(state => state.player);
  const currentIndex = yield player.podcast.tracks.findIndex(
    episode => episode.id === player.current
  );

  if (player.podcast.tracks[currentIndex - 1]) {
    yield call(TrackPlayer.skipToPrevious);
    yield put(PlayerActions.play());
  }
}

export function* next() {
  const player = yield select(state => state.player);
  const currentIndex = yield player.podcast.tracks.findIndex(
    episode => episode.id === player.current
  );

  if (player.podcast.tracks[currentIndex + 1]) {
    yield call(TrackPlayer.skipToNext);
    yield put(PlayerActions.play());
  }
}

export function* reset() {
  yield call(TrackPlayer.stop);
  yield call(TrackPlayer.reset);
}
