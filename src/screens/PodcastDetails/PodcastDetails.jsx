import React, { useState, useEffect } from 'react';

import { Container, Icon, Image, ImageGradient, Title, Info, Number, Percentage, Meta, Row, RoundButton, Description, Label, Content, Actions, PlayButton, Progress, HeaderButton, HeaderContainer, HeaderExtraSpace, HeaderGradient} from './styles';
import Player from "~/components/Player";
import BottomTabs from "~/components/BottomTabs";
import { useNavigation } from "react-navigation-hooks";
import { getPodcast } from '~/services/firebase'
import striptags from "striptags";
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
  const [podcast, setPodcast] = useState(null)

  const { state: { params } } = useNavigation();
  const {id} = params;

  console.log({id})

  useEffect(() => {
    getPodcast(id, item => {
      setPodcast(item)
    })
  }, [])

  if(!podcast)return null

  const descriptionNoTags = striptags(podcast.description)
  const description = Html5Entities.decode(descriptionNoTags).substring(0, 100)

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
            <Meta>8 NOV 2019  •  32 MIN RESTANTE(S)</Meta>
            <Progress>
              <Percentage />
            </Progress>
          </Row>
          <Row style={{ marginTop: 24 }}>
            <PlayButton>
              <Label>Play</Label>
            </PlayButton>
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
            {`${description}...`}
          </Description>
        </Info>
      </Content>
      <Player />
      <BottomTabs />
    </Container>
  )
}

export default PodcastDetails;
