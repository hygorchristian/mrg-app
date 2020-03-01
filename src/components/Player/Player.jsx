import React from 'react';

import { Container, Percentage, Number, Info, Indicator, Title, Image, Icon, Button, Gradient } from './styles';
import { useNavigation } from "react-navigation-hooks";

function Player() {
  const navigation = useNavigation()

  const handlePlayerDetails = () => {
    navigation.navigate('PlayerScreen')
  }

  return (
    <Container onPress={handlePlayerDetails}>
      <Indicator>
        <Percentage />
      </Indicator>
      <Image source={{ uri: 'https://www.matandorobosgigantes.com/wp-content/uploads/2020/01/afonso-3d-com-papa-francisco-MRG-podcast.jpg' }}>
        <Gradient />
      </Image>
      <Info>
        <Number>MRG 45</Number>
        <Title>A Voz do Robô dá um tapa no Papa!</Title>
      </Info>
      <Button>
        <Icon name="pause" size={30} />
      </Button>
    </Container>
  )
}

export default Player;
