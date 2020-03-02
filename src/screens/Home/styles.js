import styled from 'styled-components';
import colors from '~/assets/colors';
import OpenSans from '~/components/OpenSans';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Modal } from 'react-native-paper';
import { SCREEN_WIDTH } from '~/utils/dimensions';

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

export const FilterMenu = styled.View`
  width: ${SCREEN_WIDTH - 60};
  background-color: ${colors.paper};
  align-self: center;
  border-radius: 5px;
  padding: 20px;
`;

export const MenuTitle = styled(OpenSans).attrs({
  weight: 'bold',
})`
  font-size: 16;
  margin-vertical: 20px;
`;

export const MenuItem = styled.TouchableOpacity`
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuLabel = styled(OpenSans)``;

export const MenuIcon = styled(Icon)``;
