import styled from 'styled-components/native';
import { ProgressBar } from 'react-native-paper';
import colors from '~/assets/colors';
import Montserrat from '~/components/Montserrat';
import { SCREEN_WIDTH } from '~/utils/dimensions';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  flex: 1;
`;

export const LogoContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  objectFit: 'contain',
})`
  width: ${SCREEN_WIDTH - 60};
  height: ${SCREEN_WIDTH - 60};
  background-color: black;
`;

export const Text = styled(Montserrat).attrs({
  weight: 'semibold',
})`
  width: 300px;
  text-align: center;
  font-size: 20px;
  color: ${colors.primaryLight};
  letter-spacing: 1.11px;
`;

export const LoadingContainer = styled.View`
  height: 10px;
  width: 100%;
  padding-horizontal: 30px;
  margin-top: 30px;
  margin-bottom: 100px;
`;

export const Loading = styled(ProgressBar).attrs({
  indeterminate: true,
  visible: true,
  color: colors.secondary,
  progress: 0.5,
})`
  width: 100%;
  height: 4px;
`;
