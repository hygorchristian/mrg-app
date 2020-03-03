import React from 'react';

import { Container, Content, Image, ItemsMenu, Version } from './styles';
import robotizacao from '~/assets/img/robotizacao.png'
import MenuItem from "~/components/MenuItem";

function Drawer(props) {
  return (
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
  )
}

export default Drawer;
