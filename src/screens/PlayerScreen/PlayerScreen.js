import React, { useState, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
import {
  useTrackPlayerProgress,
  setRate,
  getPosition,
  seekTo,
} from 'react-native-track-player';

import {
  Container,
  HeaderButton,
  HeaderContainer,
  HeaderExtraSpace,
  HeaderGradient,
  Image,
  Icon,
  MIcon,
  ImageBackground,
  Content,
  Label,
  Percentage,
  Number,
  Title,
  Button,
  Controls,
  Slider,
  TimeText,
  TimeView,
} from './styles';
import { PlayerActions } from '~/store/ducks/player';
import { formatSeconds } from '~/utils/time';
import { StatusBar } from 'react-native';

function Header() {
  const { pop } = useNavigation();

  const handleBack = () => {
    pop();
  };

  return (
    <>
      <HeaderExtraSpace />
      <HeaderContainer>
        <HeaderGradient />
        <HeaderButton onPress={handleBack}>
          <Icon name="arrow-left" size={24} />
        </HeaderButton>
        <HeaderButton>
          <Icon name="dots-vertical" size={24} />
        </HeaderButton>
      </HeaderContainer>
    </>
  );
}

function PlayerScreen() {
  const [rate, _setRate] = useState(1);
  const [shownProgress, setShownProgress] = useState(null);
  const dispatch = useDispatch();
  const { current, playing } = useSelector(state => state.player);
  const { position, duration } = useTrackPlayerProgress();

  const handlePlay = () => {
    dispatch(PlayerActions.play());
  };

  const handlePause = () => {
    dispatch(PlayerActions.pause());
  };

  const handleJumpForward = async () => {
    let position = await getPosition();
    let newPosition = position + 10;
    await seekTo(newPosition);
  };

  const handleJumpBack = async () => {
    let position = await getPosition();
    let newPosition = position - 10;
    await seekTo(newPosition);
  };

  const handleProgress = e => {
    seekTo((e / 100) * duration);
    setShownProgress(null);
  };

  const handleRate = () => {
    const set = r => {
      _setRate(r);
      setRate(r);
    };

    if (rate === 1) {
      set(1.25);
    }
    if (rate === 1.25) {
      set(1.5);
    }
    if (rate === 1.5) {
      set(1.75);
    }
    if (rate === 1.75) {
      set(2);
    }
    if (rate === 2) {
      set(0.5);
    }
    if (rate === 0.5) {
      set(0.75);
    }
    if (rate === 0.75) {
      set(1);
    }
  };

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#000000');
  }, []);

  return (
    <Container>
      <ImageBackground source={{ uri: current && current.artwork }} />
      <Header />
      <Image source={{ uri: current && current.artwork }} />
      <Content>
        <Number>{current && current.number}</Number>
        <Title>{current && current.onlyTitle}</Title>

        <Slider
          value={
            shownProgress
              ? shownProgress
              : position && duration
              ? (position / duration) * 100
              : 0
          }
          // value={20}
          onValueChange={e => setShownProgress(e)}
          onSlidingComplete={e => handleProgress(e)}
        />

        <TimeView>
          <TimeText>
            {shownProgress
              ? formatSeconds((shownProgress / 100) * duration)
              : formatSeconds(position)}
          </TimeText>
          <TimeText>{formatSeconds(duration)}</TimeText>
          {/*<TimeText>{duration}</TimeText>*/}
        </TimeView>
        <Controls>
          <Button onPress={handleRate}>
            <Label active={rate !== 1}>{rate}x</Label>
          </Button>
          <Button onPress={handleJumpBack}>
            <MIcon name="replay-10" size={40} />
          </Button>
          {playing ? (
            <Button
              onPress={handlePause}
              size={70}
              style={{
                marginHorizontal: 5,
              }}
            >
              <MIcon name="pause-circle-filled" size={70} />
            </Button>
          ) : (
            <Button
              onPress={handlePlay}
              size={70}
              style={{
                marginHorizontal: 5,
              }}
            >
              <MIcon name="play-circle-filled" size={70} />
            </Button>
          )}
          <Button onPress={handleJumpForward}>
            <MIcon name="forward-10" size={40} />
          </Button>
          <Button>
            <MIcon name="playlist-play" size={28} />
          </Button>
        </Controls>
      </Content>
    </Container>
  );
}

export default PlayerScreen;
