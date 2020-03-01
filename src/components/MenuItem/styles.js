import styled from 'styled-components/native';
import colors from '~/assets/colors';
import OpenSans from '~/components/OpenSans';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 48px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.separator};
`;

export const Label = styled(OpenSans)`
  margin-left: 16px;
  font-size: 14px;
`;
