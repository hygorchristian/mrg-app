import TrackPlayer from 'react-native-track-player';
import { store } from '../store';
import { PlayerActions } from '../store/ducks/player';

export default async () => {
  await TrackPlayer.addEventListener('remote-play', () => {
    store.dispatch(PlayerActions.play());
  });
  await TrackPlayer.addEventListener('remote-pause', async () => {
    store.dispatch(PlayerActions.pause());
  });
  await TrackPlayer.addEventListener('remote-jump-forward', async event => {
    let position = await TrackPlayer.getPosition();
    let newPosition = position + event.interval;
    await TrackPlayer.seekTo(newPosition);
  });

  await TrackPlayer.addEventListener('remote-jump-backward', async event => {
    let position = await TrackPlayer.getPosition();
    let newPosition = position > 9 ? position - event.interval : 0;
    await TrackPlayer.seekTo(newPosition);
  });

  await TrackPlayer.addEventListener('remote-duck', async event => {
    const { paused, permanent } = event;

    if (paused) {
      store.dispatch(PlayerActions.pause());
    }

    if (permanent) {
      store.dispatch(PlayerActions.stop());
    }

    if (!permanent && !paused) {
      store.dispatch(PlayerActions.play());
    }
  });
};
