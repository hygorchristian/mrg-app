import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import DownloadList from '~/screens/DownloadList';
import DownloadManager from '~/screens/DownloadManager';
import Header from '~/components/Header';
import colors from '~/assets/colors';
import { SEMIBOLD } from '~/components/Montserrat/fonts';

const DownloadTabs = createMaterialTopTabNavigator(
  {
    DownloadList: {
      screen: DownloadList,
      navigationOptions: {
        tabBarLabel: 'Lista',
      },
    },
    DownloadManager: {
      screen: DownloadManager,
      navigationOptions: {
        tabBarLabel: 'Gerenciador',
      },
    },
  },
  {
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: colors.textPrimary,
      inactiveTintColor: colors.inactive,
      style: {
        backgroundColor: colors.background,
      },
      labelStyle: {
        textTransform: 'capitalize',
        fontFamily: SEMIBOLD,
      },
      indicatorStyle: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
      },
      tabStyle: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
  }
);

export default DownloadTabs;
