import React, { useState, useEffect } from 'react';

import { Container, Icon, Image, ImageGradient, Title, Info, Number, Percentage, Meta, Row, RoundButton, Description, Label, Content, Actions, PlayButton, Progress, HeaderButton, HeaderContainer, HeaderExtraSpace, HeaderGradient} from './styles';
import Player from "~/components/Player";
import BottomTabs from "~/components/BottomTabs";
import { useNavigation } from "react-navigation-hooks";
import { getPodcast } from '~/services/firebase'
import striptags from "striptags";
import { formatDMY, getLastMin } from "~/utils/time";
import { Controllers, Indicator } from "~/components/ItemPodcast/styles";
import { useDispatch, useSelector } from "react-redux";
import colors from "~/assets/colors";
import { PlayerActions } from "~/store/ducks/player";
const Html5Entities = require('html-entities').Html5Entities;


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
  )
}

function PodcastDetails() {
  const { state: { params } } = useNavigation();
  const {id} = params;

  const [podcast, setPodcast] = useState(null)
  const [track, setTrack] = useState(null)
  const {current, playing} = useSelector(state => state.player)
  const podcastsPosition = useSelector(state => state.podcasts.podcastsPosition)
  const dispatch = useDispatch()


  const handlePlay = () => {
    if(current && current.id === podcast.uid){
      dispatch(PlayerActions.play())
      return
    }

    const track = {
      id: podcast.uid,
      url: podcast.file.url,
      title: `${podcast.number} - ${podcast.title}`,
      onlyTitle: `${podcast.title}`,
      number: podcast.number,
      artist: 'Matando Robôs Gigantes',
      artwork: podcast.cover
    }

    dispatch(PlayerActions.setTrack(track))
  }

  const handlePause = () => {
    dispatch(PlayerActions.pause())
  }


  useEffect(() => {
    getPodcast(id, item => {
      const t = podcastsPosition[item.uid]
      setTrack(t)
      setPodcast(item)
    })
  }, [])

  if(!podcast)return null

  return (
    <Container>
      <Header />
      <Content>
        <Image source={{ uri: podcast.cover }}>
          <ImageGradient />
          <Number>{podcast.number}</Number>
          <Title>{podcast.title} </Title>
        </Image>
        <Info>
          <Row>
            {track && <Meta>{formatDMY(podcast.date)}  •  {getLastMin(track.duration, track.position)}  </Meta>}
            {!track && <Meta>{formatDMY(podcast.date)}  •  NÃO TOCADO </Meta>}
            {track && (
              <Progress>
                <Percentage width={track.position / track.duration * 100} />
              </Progress>
            )}
          </Row>
          <Row style={{ marginTop: 24 }}>
            {current && current.id === podcast.uid && playing ? (
              <PlayButton  onPress={handlePause}>
                <Label>Pause</Label>
             </PlayButton>
            ): (
              <PlayButton  onPress={handlePlay}>
                <Label>Play</Label>
              </PlayButton>
            )}
            <Actions>
              <RoundButton>
                <Icon name="share" size={24} />
              </RoundButton>
              <RoundButton>
                <Icon name="download" size={20} />
              </RoundButton>
            </Actions>
          </Row>
          <Description>
            {podcast.description}
          </Description>
        </Info>
      </Content>
      <Player />
    </Container>
  )
}

export default PodcastDetails;
