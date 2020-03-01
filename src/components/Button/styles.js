import styled from 'styled-components/native';
import colors from '~/assets/colors';
import OpenSans from '~/components/OpenSans';

export const Container = styled.TouchableOpacity`
  height: 30px;
  border-radius: 3;
  background-color: ${colors.paper};
  padding-horizontal: 13px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled(OpenSans).attrs({
  shadow: true,
  weight: 'bold',
})`
  font-size: 13px;
  color: ${colors.textSecondary};
`;
