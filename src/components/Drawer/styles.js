import styled from 'styled-components/native';
import { Animated } from 'react-native';
import colors from '~/assets/colors';
import OpenSans from '~/components/OpenSans';
import { BOTTOM_SPACE } from '~/utils/dimensions';

export const Container = styled(Animated.View)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  flex-direction: row;
`;

export const Content = styled.View`
  width: 280px;
  height: 100%;
  background-color: ${colors.paper};
  z-index: 10;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 280px;
  height: 200px;
`;

export const ItemsMenu = styled.View`
  padding-left: 20px;
  margin-top: 20px;
  flex: 1;
`;

export const Version = styled(OpenSans)`
  margin-bottom: ${BOTTOM_SPACE + 20};
  margin-left: 20px;
`;

export const Close = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.4);
`;
