import styled from 'styled-components/native';
import OpenSans from '~/components/OpenSans';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '~/assets/colors';
import { SCREEN_WIDTH } from '~/utils/dimensions';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 18px 15px;
  background-color: ${colors.paper};
  margin-bottom: 16px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  height: 65px;
  width: 65px;
  border-radius: 5px;
  background-color: #7e7e7e;
`;

export const Touch = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  align-items: flex-end;
  justify-content: center;
  align-self: flex-start;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Number = styled(OpenSans).attrs({
  weight: 'bold',
  shadow: true,
})`
  color: ${colors.primary};
`;

export const Title = styled(OpenSans).attrs({
  weight: 'bold',
  shadow: true,
})`
  margin-top: 4px;
  flex: 1;
  flex-wrap: wrap;
`;

export const Icon = styled(MDIcon)`
  color: ${({ active }) => (active ? colors.primary : colors.textPrimary)};
`;

export const Description = styled(OpenSans)`
  font-size: 13px;
  line-height: 16px;
  flex-wrap: wrap;
  margin-top: 8px;
  color: ${colors.textSecondary};
`;

export const Controllers = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const RoundButton = styled.TouchableOpacity`
  height: 32;
  width: 32px;
  border-radius: 16px;
  border-width: 1px;
  border-color: white;
  align-items: center;
  justify-content: center;
`;

export const PlayButton = styled.TouchableOpacity`
  height: 36px;
  width: 36px;
  background-color: white;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;

export const Indicator = styled.View`
  height: 3px;
  width: ${SCREEN_WIDTH - 32};
  background-color: ${colors.textSecondary};
  position: absolute;
  bottom: 0;
  left: 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Percentage = styled.View`
  width: ${({ width }) => width}%;
  height: 100%;
  background-color: ${colors.primary};
`;

export const Meta = styled(OpenSans).attrs({
  weight: 'semibold',
})`
  flex: 1;
  font-size: 10px;
  color: ${colors.textSecondary};
  padding-horizontal: 10px;
`;
