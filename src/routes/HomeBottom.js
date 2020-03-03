import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import TabIcon from '~/components/TabIcon';

import BottomTabs from '~/components/BottomTabs';
import Home from '~/screens/Home';
import Downloads from '~/screens/Downloads';
import Search from '~/screens/Search';
import DownloadTabs from '~/routes/DownloadTabs';
import Header from '~/components/Header';
import HeaderMenu from '~/components/HeaderMenu';
import { Container } from '~/screens/Home/styles';

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
      }),
    },
    Downloads: {
      screen: DownloadTabs,
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
