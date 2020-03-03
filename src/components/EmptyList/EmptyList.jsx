import React from 'react';

import { Container, Lottie, Text } from './styles';
import wait from '~/assets/animations/robot_wait.json';

function EmptyList() {
  return (
    <Container>
      <Lottie
        source={wait}
        autoPlay
        loop
      />
      <Text>Não foram achados robôs gigantes :(</Text>
    </Container>
  )
}

export default EmptyList;
