import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabIcon from '~/components/TabIcon';

import Mapa from '~/screens/Mapa';
import Ongs from '~/screens/Ongs';
import BottomTabs from '~/components/BottomTabs';
import Postagens from '~/screens/Postagens';
import NovaPostagem from '~/screens/NovaPostagem';
import Parceiros from '~/screens/Parceiros';
import { store } from '~/store';
import { showNotAuthMessage } from '~/utils/snackbar';

const ListaIcon = ({ tintColor }) => (
  <TabIcon name="paw" tintColor={tintColor} type="fa" />
);

const MapaIcon = ({ tintColor }) => (
  <TabIcon name="map-marker-alt" tintColor={tintColor} type="fa" />
);

const OngsIcon = ({ tintColor }) => (
  <TabIcon name="hand-holding-heart" tintColor={tintColor} type="fa" />
);

const ParceirosIcon = ({ tintColor }) => (
  <TabIcon name="handshake" solid tintColor={tintColor} type="fa" />
);

const NovoItemIcon = ({ tintColor }) => (
  <TabIcon name="add" tintColor={tintColor} type="rounded" />
);

const HomeBottom = createBottomTabNavigator(
  {
    Posts: {
      screen: Postagens,
      navigationOptions: {
        header: null,
        tabBarIcon: ListaIcon,
      },
    },
    Mapa: {
      screen: Mapa,
      navigationOptions: {
        header: null,
        tabBarIcon: MapaIcon,
      },
    },
    NovaPostagems: {
      screen: NovaPostagem,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarIcon: NovoItemIcon,
        tabBarOnPress: ({ navigation }) => {
          const state = store.getState();
          const isAuth = state.auth.isAuth;
          if (isAuth) {
            navigation.navigate('NovaPostagem');
          } else {
            showNotAuthMessage(() => {
              navigation.navigate('Login');
            });
          }
        },
      }),
    },
    Ongs: {
      screen: Ongs,
      navigationOptions: {
        header: null,
        tabBarIcon: OngsIcon,
      },
    },
    Parceiros: {
      screen: Parceiros,
      navigationOptions: {
        header: null,
        tabBarIcon: ParceirosIcon,
        tabBarOnPress: ({ navigation }) => {
          navigation.navigate('SobreParcerias');
        },
      },
    },
  },
  {
    tabBarComponent: BottomTabs,
    tabBarOptions: {
      showLabel: false,
    },
  }
);

export default createAppContainer(HomeBottom);
