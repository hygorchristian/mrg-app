import styled from 'styled-components/native';
import OpenSans from '~/components/OpenSans';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/assets/colors';

const getColor = props => {
  return props.active ? 'red' : 'blue';
};

export const Container = styled.View`
  height: 56px;
  width: 100%;
  background-color: ${colors.paper};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Item = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MDIcon).attrs({
  size: 24,
})`
  color: ${({ active }) => (active ? 'white' : colors.inactive)};
`;

export const Label = styled(OpenSans).attrs({
  weight: 'semibold',
})`
  font-size: 12px;
  color: ${({ active }) => (active ? 'white' : colors.textSecondary)};
`;

export const ExtraSpace = styled.View`
  width: 100%;
  height: ${getBottomSpace()};
  background-color: ${colors.paper};
`;
