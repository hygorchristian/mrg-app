import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import striptags from "striptags";
const Html5Entities = require('html-entities').Html5Entities;

import { Container, Touch,PlayButton, Icon, Image, Description, Title, Controllers, Indicator, Info, Number, Percentage, RoundButton, Row, Meta } from './styles';
import colors from "~/assets/colors";
import { useDispatch } from "react-redux";

function ItemPodcast({ item }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()


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
        <PlayButton>
          <Icon name="play" style={{ color: colors.paper }} size={24} />
        </PlayButton>
        <Meta>{item.date}  •  32 MIN RESTANTE(S)</Meta>
        <RoundButton onClick={() => {}}>
          <Icon name="download" size={20} />
        </RoundButton>
      </Controllers>
      <Indicator>
        <Percentage />
      </Indicator>
    </Container>
  )
}

export default ItemPodcast;
