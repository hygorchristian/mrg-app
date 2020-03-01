import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Container, Label } from './styles';

function MenuItem({ icon, screen, children, ...props }) {
  return (
    <Container {...props}>
      <Icon name={icon} size={18} color="white" />
      <Label>{children}</Label>
    </Container>
  )
}

export default MenuItem;
