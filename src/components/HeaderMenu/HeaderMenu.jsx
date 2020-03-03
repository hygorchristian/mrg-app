import React from 'react';
import { Appbar } from 'react-native-paper';
import { AppActions } from "~/store/ducks/app";
import { useNavigation } from "react-navigation-hooks";

function HeaderMenu({  ...props }) {
  const navigation = useNavigation()

  const parent = navigation.dangerouslyGetParent();
  const menuOpen = parent && parent.state && parent.state.isDrawerOpen;

  const handleMenu = () => {
    navigation.toggleDrawer()
  }

  const handleMore = () => {

  }


  return (
    <>
    <Appbar.Header style={{ backgroundColor: menuOpen ? 'black': '' }}>
      <Appbar.Action icon={menuOpen ? 'arrow-left' : 'menu'} onPress={handleMenu} />
      <Appbar.Content  />
      <Appbar.Action icon="dots-vertical" onPress={handleMore} />
    </Appbar.Header>
      {/*<Drawer/>*/}
    </>
  )
}

export default HeaderMenu;
