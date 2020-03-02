import styled from 'styled-components/native';
import { BottomTabBar } from 'react-navigation-tabs';

export const Container = styled(BottomTabBar).attrs({
  activeTintColor: '#ffffff',
  inactiveTintColor: 'rgba(255,255,255,0.4)',
  pressColor: '#7f8c8d',
})`
  background-color: #27998f;
  height: 55px;
`;
