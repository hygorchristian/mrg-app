import '~/config/ReactotronConfig';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { store, persistor } from '~/store';
import Routes from '~/routes';
import colors from '~/assets/colors';

console.disableYellowBox = true;

StatusBar.setBarStyle('light-content');
StatusBar.setBackgroundColor('#000000');

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.background,
    accent: colors.secondary,
  },
  dark: true,
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </PersistGate>
  </Provider>
);

export default App;
