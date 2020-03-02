import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabIcon from '~/components/TabIcon';

import BottomTabs from '~/components/BottomTabs';
import Home from '~/screens/Home';
import Downloads from '~/screens/Downloads';
import Search from '~/screens/Search';

const HomeIcon = ({ tintColor }) => (
  <TabIcon name="home" tintColor={tintColor} type="material" />
);

const SearchIcon = ({ tintColor }) => (
  <TabIcon name="magnify" tintColor={tintColor} type="material" />
);

const DownloadsIcon = ({ tintColor }) => (
  <TabIcon name="cloud-download" tintColor={tintColor} type="material" />
);

const HomeBottom = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        tabBarIcon: HomeIcon,
        tabBarLabel: 'Home',
      },
    },
    SearchScreen: {
      screen: Search,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarLabel: 'Buscar',
        tabBarIcon: SearchIcon,
        tabBarOnPress: ({ navigation }) => {
          navigation.navigate('Search');
        },
        label: 'Busca',
      }),
    },
    Downloads: {
      screen: Downloads,
      navigationOptions: {
        header: null,
        tabBarIcon: DownloadsIcon,
        tabBarLabel: 'Downloads',
      },
    },
  },
  {
    tabBarComponent: BottomTabs,
  }
);

export default createAppContainer(HomeBottom);
