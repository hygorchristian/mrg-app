import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeBottom from './HomeBottom';
import Home from '~/screens/Home';
import Downloads from '~/screens/Downloads';
import Search from '~/screens/Search';
import { createStackNavigator } from 'react-navigation-stack';
import PodcastDetails from '~/screens/PodcastDetails';
import PlayerScreen from '~/screens/PlayerScreen';
import Splash from '~/screens/Splash';

const MainStack = createStackNavigator({
  HomeBottom: {
    screen: HomeBottom,
    navigationOptions: {
      header: null,
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
});

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
    headerMode: 'none',
  }
);

const Routes = createSwitchNavigator({
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
  // Stack: {
  //   screen: Stack,
  //   navigationOptions: {
  //     header: null,
  //     gesturesEnabled: false,
  //   },
  // },
});

export default createAppContainer(Routes);
