import React from 'react';

import { Container, Label } from './styles';

function Button({ children, ...props }) {
  return (
    <Container {...props}>
      <Label>{children}</Label>
    </Container>
  )
}

export default Button;
