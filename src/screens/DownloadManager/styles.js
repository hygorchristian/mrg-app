import styled from 'styled-components/native';
import colors from '~/assets/colors';

export const Container = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
})`
  flex: 1;
  background-color: ${colors.background};
`;
