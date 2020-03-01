import React from 'react';
import { Appbar } from 'react-native-paper';

function HeaderMenu({ menuOpen, handleMenu, handleMore, ...props }) {

  return (
    <Appbar.Header style={{ backgroundColor: menuOpen ? 'black': '' }}>
      <Appbar.Action icon={menuOpen ? 'arrow-left' : 'menu'} onPress={handleMenu} />
      <Appbar.Content  />
      <Appbar.Action icon="dots-vertical" onPress={handleMore} />
    </Appbar.Header>
  )
}

export default HeaderMenu;
