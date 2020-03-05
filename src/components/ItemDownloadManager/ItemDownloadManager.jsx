import React from 'react';

import { Container, Icon, Button, Title, Number, Percentage, Progress, Row, Info, Divider, Date, ProgressInfo } from './styles';

function ItemDownloadManager({ item }) {
  return (
    <Container>
      <Info>
        <Title>Hollow Knight, nosso guerreirinho ...</Title>
        <Row>
          <Number>MRG 477</Number>
          <Date>8 NOV 2019</Date>
        </Row>
      </Info>
      <Divider/>
      <ProgressInfo error={item.error}>{item.error ? 'Erro' : '63%'}</ProgressInfo>
      <Button>
        <Icon name="close" />
      </Button>
      <Progress error={item.error}>
        <Percentage error={item.error}/>
      </Progress>
    </Container>
  )
}

export default ItemDownloadManager;
