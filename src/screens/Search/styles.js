import styled from 'styled-components/native';
import { Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '~/components/Montserrat';
import { SEMIBOLD } from '~/components/Montserrat/fonts';
import colors from '~/assets/colors';

const PADDING_TOP = Platform.select({
  ios: getStatusBarHeight() + 12,
  android: 12,
});

const MARGIN_TOP = Platform.select({
  ios: -2,
  android: -5,
});

export const Container = styled(LinearGradient).attrs({
  colors: [colors.background, colors.background],
})`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-top: ${PADDING_TOP};
`;

export const Header = styled.View`
  height: 55px;
  align-items: center;
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CloseButton = styled.TouchableOpacity`
  height: 55px;
  width: 55px;
  justify-content: center;
  align-items: flex-start;
`;

export const CloseIcon = styled(MDIcon).attrs({
  size: 24,
  name: 'close',
})`
  color: white;
`;

export const StoreInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StoreLabel = styled(Text).attrs({
  weight: 'medium',
})`
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 65px;
  padding-horizontal: 35px;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchIcon = styled(MDIcon).attrs({
  size: 28,
  name: 'magnify',
})`
  color: white;
  margin-right: 14px;
  margin-top: ${MARGIN_TOP};
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.5)',
  selectionColor: 'white',
})`
  font-size: 21px;
  font-weight: 600;
  color: white;
  height: 44px;
  flex: 1;
  font-family: ${SEMIBOLD};
`;

export const ResultList = styled.FlatList`
  margin-top: 40px;
  padding-horizontal: 20px;
  flex: 1;
`;

export const ResultSeparator = styled.View`
  width: 100%;
  height: ${StyleSheet.hairlineWidth};
  background-color: rgba(255, 255, 255, 0.2);
`;

export const ResultButton = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  padding-horizontal: 15px;
  justify-content: center;
`;

export const ResultItem = styled(Text)`
  color: white;
  font-size: 14px;
`;
