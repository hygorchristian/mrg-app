import React from 'react';

import { Container, Label, ExtraSpace, Icon, Item } from './styles';

function BottomTabs() {
  return (
    <>
      <Container>
        <Item>
          <Icon active name="home" />
          <Label active>Início</Label>
        </Item>
        <Item>
          <Icon name="search" />
          <Label>Buscar</Label>
        </Item>
        <Item>
          <Icon name="cloud-download" />
          <Label>Downloads</Label>
        </Item>
      </Container>
      <ExtraSpace />
    </>
  )
}

export default BottomTabs;
