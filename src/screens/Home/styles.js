import styled from 'styled-components';
import colors from '~/assets/colors';
import OpenSans from '~/components/OpenSans';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Content = styled.View`
  flex: 1;
  position: relative;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  flex: 1;
`;

export const FilterContainer = styled.View`
  height: 70px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 28px;
  justify-content: space-between;
`;

export const PodcastList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  flex: 1;
`;

export const FilterLabel = styled(OpenSans).attrs({
  weight: 'bold',
  shadow: true,
})`
  font-size: 16px;
`;
