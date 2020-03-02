import React from 'react';

import { Container, Image, Text, } from './styles';
import { useNavigation } from "react-navigation-hooks";

function ResultItem({ item, ...props }) {
  const navigation = useNavigation()

  const handleDetails = () => {
    navigation.navigate('PodcastDetails', { id: item.uid })
  }

  return (
    <Container {...props} onPress={handleDetails} >
      <Image source={{ uri: item.cover }} />
      <Text>{item.number} - {item.title}</Text>
    </Container>
  )
}

export default ResultItem;
