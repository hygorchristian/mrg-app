import styled from 'styled-components/native';
import { BottomTabBar } from 'react-navigation-tabs';
import colors from '~/assets/colors';

export const Container = styled(BottomTabBar).attrs({
  activeTintColor: colors.textPrimary,
  inactiveTintColor: colors.inactive,
  pressColor: colors.primary,
})`
  background-color: ${colors.paper};
  height: 56px;
`;
