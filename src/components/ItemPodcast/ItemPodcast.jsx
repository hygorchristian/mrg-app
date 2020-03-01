import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import striptags from "striptags";
const Html5Entities = require('html-entities').Html5Entities;

import { Container, Touch,PlayButton, Icon, Image, Description, Title, Controllers, Indicator, Info, Number, Percentage, RoundButton, Row, Meta } from './styles';
import colors from "~/assets/colors";
import { useDispatch, useSelector } from "react-redux";
import { PlayerActions } from "~/store/ducks/player";

function ItemPodcast({ item }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const {current, playing} = useSelector(state => state.player)
  const {podcastsPosition} = useSelector(state => state.podcasts)

  const handlePlay = () => {
    if(current && current.id === item.uid){
      dispatch(PlayerActions.play())
      return
    }

    const track = {
      id: item.uid,
      url: item.file.url,
      title: `${item.number} - ${item.title}`,
      onlyTitle: `${item.title}`,
      number: item.number,
      artist: 'Matando Robôs Gigantes',
      artwork: item.cover
    }

    dispatch(PlayerActions.setTrack(track))
  }

  const handlePause = () => {
    dispatch(PlayerActions.pause())
  }

  const handleDetails = () => {
    navigation.navigate('PodcastDetails', { id: item.uid })
  }

  const descriptionNoTags = striptags(item.description)
  const description = Html5Entities.decode(descriptionNoTags).substring(0, 100)

  return (
    <Container onPress={handleDetails}>
      <Row>
        <Image source={{ uri: item.cover }} />
        <Info>
          <Number>{item.number}</Number>
          <Title>{item.title} </Title>
        </Info>
        <Touch>
          <Icon name='dots-vertical' size={20} />
        </Touch>
      </Row>
      <Description>
        {`${description}...`}
      </Description>
      <Controllers>
        {current && current.id === item.uid && playing ? (
          <PlayButton onPress={handlePause}>
            <Icon name="pause" style={{ color: colors.paper }} size={24} />
          </PlayButton>
        ): (
          <PlayButton onPress={handlePlay}>
            <Icon name="play" style={{ color: colors.paper }} size={24} />
          </PlayButton>
        )}

        <Meta>{item.date}  •  32 MIN RESTANTE(S)</Meta>
        <RoundButton onClick={() => {}}>
          <Icon name="download" size={20} />
        </RoundButton>
      </Controllers>
      {
        podcastsPosition[item.uid] && (
          <Indicator>
            <Percentage  width={podcastsPosition[item.uid].position / podcastsPosition[item.uid].duration * 100} />
          </Indicator>
        )
      }

    </Container>
  )
}

export default ItemPodcast;
