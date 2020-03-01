import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import OpenSans from '~/components/OpenSans';
import colors from '~/assets/colors';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 60px;
  background-color: #0f0f10;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Indicator = styled.View`
  height: 2px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.textSecondary};
  z-index: 10;
`;

export const Percentage = styled.View`
  width: ${({ width }) => width}%;
  height: 100%;
  background-color: ${colors.primary};
`;

export const Image = styled.ImageBackground`
  width: 120px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['transparent', '#0f0f10'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  height: 100%;
  width: 60px;
`;

export const Info = styled.View`
  padding-left: 8px;
  flex: 1;
`;

export const Number = styled(OpenSans).attrs({
  weight: 'bold',
  shadow: true,
})`
  font-size: 12px;
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const Title = styled(OpenSans).attrs({
  weight: 'bold',
  shadow: true,
})`
  font-size: 12;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MDIcon)`
  color: ${colors.textPrimary};
`;
