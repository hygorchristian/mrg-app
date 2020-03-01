import styled from 'styled-components/native';
import { Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import MDCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/assets/colors';
import { SCREEN_WIDTH } from '~/utils/dimensions';
import OpenSans from '~/components/OpenSans';
import Montserrat from '~/components/Montserrat';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${colors.background};
`;

export const ImageBackground = styled.Image.attrs({
  blurRadius: 10,
})`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  opacity: 0.5;
`;

export const Image = styled.Image`
  height: ${SCREEN_WIDTH - 60};
  width: ${SCREEN_WIDTH - 60};
  margin-top: 110px;
  align-self: center;
  elevation: 8;
  shadow-color: black;
  shadow-offset: 0 2px;
  shadow-opacity: 0.6;
  shadow-radius: 2px;
`;

export const Icon = styled(MDCIcon).attrs({})`
  color: ${colors.textPrimary};
`;

export const MIcon = styled(MDIcon).attrs({})`
  color: ${colors.textPrimary};
`;

export const Content = styled.View`
  margin-top: 60px;
  padding-horizontal: 30px;
`;

export const Number = styled(OpenSans).attrs({
  weight: 'bold',
  shadow: true,
})`
  font-size: 14px;
  color: ${colors.primary};
`;

export const Title = styled(OpenSans).attrs({
  weight: 'bold',
  shadow: true,
})`
  font-size: 16px;
`;

export const Slider = styled.View`
  width: 100%;
  height: 4px;
  background-color: ${colors.inactive};
  margin-top: 24px;
  border-radius: 2px;
`;

export const Percentage = styled.View`
  width: 30%;
  height: 4px;
  border-radius: 2px;
  background-color: white;
`;

export const TimeView = styled.View`
  flex-direction: row;
  margin-top: 4px;
  align-items: center;
  justify-content: space-between;
`;

export const TimeText = styled(Montserrat).attrs({
  weight: 'semibold',
})`
  font-size: 13px;
  color: ${colors.textSecondary};
`;

export const Controls = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-top: 8px;
`;

export const Button = styled.TouchableOpacity`
  height: ${({ size }) => (size ? size : 48)};
  width: ${({ size }) => (size ? size : 48)};
  border-radius: ${({ size }) => (size ? size / 2 : 24)};
  align-items: center;
  justify-content: center;
`;

export const Label = styled(Montserrat).attrs({
  weight: 'semibold',
})`
  font-size: 14px;
`;

/* HEADER */

export const HeaderExtraSpace = styled.View`
  height: ${Platform.select({ ios: getStatusBarHeight(), android: 0 })};
  width: 100%;
  background-color: ${colors.background};
`;

export const HeaderContainer = styled.View`
  height: 56px;
  width: 100%;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: ${Platform.select({ ios: getStatusBarHeight(), android: 0 })};
  left: 0;
  z-index: 20;
`;

export const HeaderButton = styled.TouchableOpacity`
  height: 56px;
  width: 56px;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const HeaderGradient = styled(LinearGradient).attrs({
  colors: [colors.background, 'transparent'],
})`
  height: 56px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;
