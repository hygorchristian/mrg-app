import styled from 'styled-components/native';
import Montserrat from '~/components/Montserrat';
import colors from '~/assets/colors';
import OpenSans from '~/components/OpenSans';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-vertical: 4px;
`;

export const Image = styled.Image`
  height: 60px;
  width: 90px;
  background-color: ${colors.paper};
`;

export const Text = styled(OpenSans)`
  font-size: 16px;
  margin-left: 8px;
  flex: 1;
`;
