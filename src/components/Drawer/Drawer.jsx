import React, { useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native'

import { Container, Content, Close, Image, ItemsMenu, Version } from './styles';
import { SCREEN_WIDTH } from "~/utils/dimensions";
import robotizacao from '~/assets/img/robotizacao.png'
import MenuItem from "~/components/MenuItem";

function Drawer({ open, onClose, ...props }) {
  const [anim, setAnim] = useState(new Animated.Value(open ? 0 : 1));

  useEffect(() => {
    Animated.timing(anim, {
      toValue: open ? 0 : 1,
      duration: 250,
      easing: Easing.inOut(Easing.quad),
    }).start();
  }, [open])

  const left = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -SCREEN_WIDTH],
  })

  const opacity = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  })

  return (
    <Container style={{ left, opacity }} {...props}>
      <Content>
        <Image source={robotizacao} />
        <ItemsMenu>
          <MenuItem icon="heart">Favoritos</MenuItem>
          <MenuItem icon="cloud-download">Downloads</MenuItem>
          <MenuItem icon="playlist-play">Playlist</MenuItem>
          <MenuItem icon="code-tags">Desenvolvedor</MenuItem>
        </ItemsMenu>
        <Version>Versão 1.0.0</Version>
      </Content>
      <Close onPress={onClose} />
    </Container>
  )
}

export default Drawer;
