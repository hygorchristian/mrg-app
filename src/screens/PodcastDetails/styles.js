import styled from 'styled-components/native';
import { Platform } from 'react-native';
import OpenSans from '~/components/OpenSans';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '~/assets/colors';
import LinearGradient from 'react-native-linear-gradient';
import { SCREEN_WIDTH } from '~/utils/dimensions';
import Montserrat from '~/components/Montserrat';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${colors.background};
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Image = styled.ImageBackground`
  height: 300px;
  flex-direction: column;
  justify-content: flex-end;
  padding-horizontal: 30px;
`;

export const ImageGradient = styled(LinearGradient).attrs({
  colors: ['transparent', colors.background],
})`
  height: 50px;
  width: ${SCREEN_WIDTH};
  position: absolute;
`;

export const Number = styled(OpenSans).attrs({
  weight: 'bold',
  shadow: true,
})`
  font-size: 18px;
  color: ${colors.primary};
`;

export const Title = styled(OpenSans).attrs({
  weight: 'bold',
  shadow: true,
})`
  font-size: 24px;
  color: ${colors.textPrimary};
  margin-bottom: 8px;
`;

export const Info = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  padding-horizontal: 30px;
  align-items: center;
`;

export const Meta = styled(OpenSans).attrs({
  weight: 'semibold',
})`
  font-size: 11px;
  color: ${colors.textLight};
  margin-right: 20px;
`;

export const Progress = styled.View`
  flex: 1;
  height: 4px;
  background-color: ${colors.textSecondary};
  border-radius: 2px;
`;

export const Percentage = styled.View`
  width: ${({ width }) => width}%;
  height: 4px;
  border-radius: 2px;
  background-color: ${colors.primary};
`;

export const PlayButton = styled.TouchableOpacity`
  height: 44px;
  width: 160px;
  border-radius: 22px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Label = styled(Montserrat).attrs({
  weight: 'bold',
})`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1.11px;
`;

export const Actions = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const RoundButton = styled.TouchableOpacity`
  height: 44px;
  width: 44px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${colors.textSecondary};
  margin-left: 12px;
`;

export const Icon = styled(MDIcon)`
  color: ${colors.textPrimary};
`;

export const Description = styled(OpenSans)`
  font-size: 16px;
  color: ${colors.textSecondary};
  line-height: 20px;
  margin-top: 24px;
  padding-horizontal: 30px;
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
