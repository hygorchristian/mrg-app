import React from 'react';

import { Container, Label } from './styles';

function TagA(htmlAttribs, children, convertedCSSStyles, passProps) {
  const handleClick = () => {}


  return (
    <Container onPress={handleClick}>
      <Label>hello</Label>
    </Container>
  )
}

export default TagA;
