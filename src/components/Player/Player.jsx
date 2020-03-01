import React, { useEffect } from 'react';

import { Container, Percentage, Number, Info, Indicator, Title, Image, Icon, Button, Gradient } from './styles';
import { useNavigation } from "react-navigation-hooks";
import { useDispatch, useSelector } from "react-redux";
import { PlayerActions } from "~/store/ducks/player";
import { useTrackPlayerProgress } from 'react-native-track-player';
import { PodcastsActions } from "~/store/ducks/podcasts";


function Player() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { position, duration } = useTrackPlayerProgress()
  const { current, playing } = useSelector(state => state.player)


  const handlePlayerDetails = () => {
    navigation.navigate('PlayerScreen')
  }

  const handlePlay = () => {
    dispatch(PlayerActions.play())
  }

  const handlePause = () => {
    dispatch(PlayerActions.pause())
  }

  useEffect(() => {
    if(current){
      dispatch(PodcastsActions.setPodcastPosition(current.id, position, duration))
    }
  }, [position])


  return (
    <Container onPress={handlePlayerDetails}>
      <Indicator>
        <Percentage width={position / duration * 100} />
      </Indicator>
      <Image source={{ uri: current && current.artwork }}>
        <Gradient />
      </Image>
      <Info>
        <Number>{current && current.number}</Number>
        <Title>{current && current.onlyTitle}</Title>
      </Info>
      {playing ? (
        <Button onPress={handlePause}>
          <Icon name="pause" size={30} />
        </Button>
      ): (
        <Button onPress={handlePlay}>
          <Icon name="play" size={30} />
        </Button>
      )}
    </Container>
  )
}

export default Player;
