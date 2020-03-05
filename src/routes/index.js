import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeBottom from './HomeBottom';
import Search from '~/screens/Search';
import { createStackNavigator } from 'react-navigation-stack';
import PodcastDetails from '~/screens/PodcastDetails';
import PlayerScreen from '~/screens/PlayerScreen';
import Splash from '~/screens/Splash';
import HeaderMenu from '~/components/HeaderMenu';
import { createDrawerNavigator } from 'react-navigation-drawer';
import colors from '~/assets/colors';
import Drawer from '~/components/Drawer';

const DrawerMain = createDrawerNavigator(
  {
    HomeBottom: {
      screen: HomeBottom,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    drawerBackgroundColor: colors.paper,
    drawerType: 'slide',
    contentComponent: () => <Drawer />,
    cardStyle: {
      backgroundColor: 'rgba(0,0,0,0)',
      opacity: 1,
    },
  }
);

const MainStack = createStackNavigator(
  {
    DrawerMain: {
      screen: DrawerMain,
      navigationOptions: {
        header: () => <HeaderMenu />,
        gesturesEnabled: false,
      },
    },
    PodcastDetails: {
      screen: PodcastDetails,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    PlayerScreen: {
      screen: PlayerScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    cardStyle: {
      backgroundColor: 'rgba(0,0,0,0)',
      opacity: 1,
    },
  }
);

export const MainSearchStack = createStackNavigator(
  {
    MainStack: {
      screen: MainStack,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    mode: 'modal',
    cardStyle: {
      backgroundColor: 'rgba(0,0,0,0)',
      opacity: 1,
    },
  }
);

const Routes = createSwitchNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    MainSearchStack: {
      screen: MainSearchStack,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    cardStyle: {
      backgroundColor: 'rgba(0,0,0,0)',
      opacity: 1,
    },
  }
);

const Navigation = createAppContainer(Routes);

export default () => <Navigation theme="dark" />;
